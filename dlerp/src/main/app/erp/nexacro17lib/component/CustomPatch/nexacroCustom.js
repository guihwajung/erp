/**
*  굿센 표준화 작업
*  넥사크로 라이브러리 (nexacro17lib) 수정이 필요한 부분 작성.
*  패치 업데이트 적용후에도 반영시키기 위함.
*  넥사 패치에서 반영되는 부분은 제거처리할 것.
*  @FileName 	nexacroCustom.js 
*  @Creator 	mango
*  @CreateDate 	2021.04.05
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*******************************************************************************
*/
if (nexacro._Browser != "Runtime") {
	/*
	 *	framework/SystemBase_HTML5.js
	 *	파일 업로드시 httpHeader 반영 추가
	 */ 
	nexacro._uploadTransferXHR = function (filelist, postdatalist, url, callbackFn) {
		var ajax;
		if (nexacro._OS == "iOS" && nexacro._isHybrid && nexacro._isHybrid()) {
			ajax = nexacro.__createFakeHttpRequest(4, false, true);
			ajax = ajax.handle;
			ajax._filelist = filelist;
			ajax._postdatalist = postdatalist;
		}
		else {
			ajax = new XMLHttpRequest();
		}

		if (!window.FormData || !ajax.upload) {
			return;
		}

		var method = "POST";
		var async = true;

		var formdata = new FormData();
		for (var i in filelist) {
			formdata.append(i, filelist[i]);
		}
		for (i in postdatalist) {
			formdata.append(i, postdatalist[i]);
		}

		try {
			ajax.open(method, url, async);

			ajax.onreadystatechange = callbackFn;
			ajax.onerror = callbackFn;
			ajax.onabort = callbackFn;

			ajax.upload.onprogress = callbackFn;

			var httpvariables = nexacro._getLocalStorageAll(5);
			if (httpvariables) {
				for (var prop in httpvariables) {
					if (httpvariables.hasOwnProperty(prop)) {
						ajax.setRequestHeader(prop, httpvariables[prop].value);
					}
				}
			}

			ajax.send(formdata);
		}
		catch (e) {
			callbackFn(e);
		}
	};

	/*
	 *	ComComp/Cell.js
	 *	트리그리드 자식이 없는 노드 +-버튼이 없는 경우 해당영역 클릭시 -버튼이 보이게 되는 버그 수정.
	 */ 
	_pCellTree._buttonUpdate = function (state) {
		var view = this._view;
		if (view && view.treeusebutton != this._treeusebutton) {
			if (view.treeusebutton == "use") {
				this._btnimg_ctrl.set_visible(true);
			}
			else {
				this._btnimg_ctrl.set_visible(false);
			}

			this._treeusebutton = view.treeusebutton;
		}

		var val;

		if (state == 2 || state == 3 || state == -1) {
			val = this._btnimg_ctrl._getCSSStyleValue("icon", "expand");

			this._load_image(this._btnimg_ctrl, val);
			this._btnimg_ctrl.set_visible(false);
			this._btnimg_ctrl._tmpw = this._btnimg_ctrl.width;
			this._btnimg_ctrl._tmph = 0; //this._btnimg_ctrl.height;
			this._btnimg_ctrl.move(this._btnimg_ctrl._adjust_left, this._btnimg_ctrl._adjust_top, 0, 0);
		}
		else {
			val = this._btnimg_ctrl._getCSSStyleValue("icon", this._userstatus);
			this._load_image(this._btnimg_ctrl, val);
		}
	};

	/*
	 *  ComComp/Combo.js
	 *	콤보박스 type 상관없이 리스트 popup
	 */ 
	_pCombo._on_edit_onlbuttondown = function (obj, e) {
		if (this.readonly || (nexacro._isTouchInteraction && nexacro._SupportTouch)) {
			return;
		}

		var ds = this._selectDataset(true);
		var idx = this.index;

		if (this._isPopupVisible()) {
			this._closePopup();
			this._setEditValue(this._getItemText(this.index));
		}
		else {
			//if (this.type == "dropdown") {
				this._showPopup(ds, idx, 1);
			//}
		}
	};

	/*
	 *	검색 빈값일때 빈값셋팅
	 */ 
	_pCombo._on_edit_oninput = function (obj, e) {
		if (this.readonly || !this._isEnable()) {
			return false;
		}

		this._isFiredOnInput = true;
		this.on_fire_oninput();

		var comboedit = this.comboedit;
		var ds = this._selectDataset();
		if (ds && comboedit._processing_keyfilter) {
			var col = this.datacolumn || this.codecolumn;
			var codecol = this.codecolumn;
			var edit_val = comboedit.text;

			var type = this.type;
			if (type != "dropdown") {
				if (!this.combolist) {
					this._createPopupListBoxControl(ds);
				}
			}

			switch (type) {
				case "search":
				case "caseisearch":
					var index;
					if (this.type == "caseisearch") {
						edit_val = new nexacro.ExprParser()._transferWhitespace(edit_val);
						index = ds.findRowExpr(col + ".match(/^" + edit_val + "/i)");
					}
					else {
						index = ds.findRowAs(col, edit_val);
					}

					if (index >= 0) {
						this._showPopup(ds, index);
					}
					else {
						if (this._isPopupVisible()) {
							this._closePopup();
						}
					}
					break;
				case "filter":
				case "filterlike":
				case "caseifilter":
				case "caseifilterlike":
					var regExp;
					var parse_val = "";
					var trans_val = "";
					var edit_val_len = edit_val.length;

					for (var i = 0; i < edit_val_len; i++) {
						regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
						var c = edit_val.charAt(i);

						if (regExp.test(c)) {
							parse_val += "\\";
						}
						parse_val += c;
					}

					trans_val = new nexacro.ExprParser()._transferWhitespace(parse_val);

					if (this.type == "filter") {
						ds.set_filterstr(col + ".match(/^(" + trans_val + ")/)");
					}
					else if (this.type == "filterlike") {
						ds.set_filterstr(col + ".indexOf('" + parse_val + "') > -1");
					}
					else if (this.type == "caseifilter") {
						ds.set_filterstr(col + ".match(/^(" + trans_val + ")/i)");
					}
					else {
						if(edit_val == "") {
							ds.set_filterstr(codecol + "=='' || " + codecol + "=='%'");
						} else {
							ds.set_filterstr(col + ".match(/(" + trans_val + ")/i)");
						}
					}

					if (edit_val && ds.getRowCount() > 0) {
						this._showPopup(ds, 0);

						var win = this._getWindow();
						if (win) {
							if (nexacro._Browser == "Runtime" && (nexacro._SystemType.toLowerCase() == "win32" || nexacro._SystemType.toLowerCase() == "win64")) {
								nexacro._flushCommand(win);
							}
						}
					}
					else {
						if (edit_val == "") {
							if(ds.getRowCount() > 0) {
								this.set_value(ds.getColumn(0, 0));
							}
							ds.set_filterstr("");
							this._showPopup(ds, 0);	
						} else {
							if (this._isPopupVisible()) {
								this._closePopup();
							}							
						}
					}
					break;
				default:
					break;
			}
		}
	};

	/*
	 *  CompBase/Element_HTML5.js
	 *	text 빈값일때도 생성
	 */ 
	_pTextBoxElement._createElementHandle = function (owner_elem, _doc) {
		if (!nexacro._isNull(this.text)) {
			_doc = _doc || owner_elem._getRootWindowHandle();
			var handle = this._createTextElementHandle(_doc);

			handle.id = this.name;
			handle._linked_element = this;

			this.handle = handle;

			var handle_style = handle.style;
			var box_node = this._box_node;
			var box_style = box_node.style;

			this._refreshCommonStyleProps(handle_style);

			if (this.textAlign) {
				nexacro.__setDOMStyle_textAlign(box_style, this.textAlign, this.rtl);
			}
			if (this.verticalAlign) {
				nexacro.__setDOMStyle_verticalAlign(box_style, this.verticalAlign);
			}

			if (this._use_decoration) {
				nexacro.__setDOMNode_DecorateText(box_node, this.text);
			}
			else {
				nexacro.__setDOMNode_Text(box_node, this.text, this.wordWrap || this._wordwrap_info);
			}

			nexacro.__appendDOMNode(owner_elem.dest_handle, handle);
		}
	};

	_pTextBoxElement.setElementText = function (text) {
		if (this.text != text || this._use_decoration == true) {
			this.text = text;
			this._use_decoration = false;
			if (this._created) {
				if (!nexacro._isNull(this.text)) {
					if (this.handle) {
						nexacro.__setDOMNode_Text(this._box_node, text, this.wordWrap || this._wordwrap_info);
					}
					else {
						this._createElementHandle(this.owner_elem);
					}
				}
				else {
					if (this.handle) {
						this._destroyElementHandle();
					}
				}
			}
		}
	};

	/*
	 *  CompBase/FormBase.js
	 *	창닫을때 넘기는 변수에 array, json 객체 지원 가능하게 변경
	 */
	_pForm.close = function (arg) {
		if (this._closing) {
			return;
		}

		if (!this.parent || !this.parent._is_frame) {
			return;
		}

		this.setWaitCursor(false, null);

		var childframe = this.parent;

		var confirm_message = childframe._on_beforeclose();
		if (childframe._checkAndConfirmClose(confirm_message) == false) {
			return false;
		}

		if (childframe._window) {
			childframe._window._ignore_close_confirm = true;
		}

		this._closing = true;
		childframe._on_close();
		this._closing = null;

		if (typeof (arg) == "object") {
			if (arg instanceof nexacro.Decimal) {
				arg = Number(arg);
			} 
			else if (arg instanceof nexacro.Dataset) {
				arg = null;
			}
			else {
				if (Array.isArray(arg)) {
					for (var i = 0; i < arg.length; i++) {
						var json = arg[i];
						if (typeof (json) == "object") {
							if (json instanceof nexacro.Decimal) {
								arg[i] = Number(json);
							} else {
								for (var key in json) {
									if (json.hasOwnProperty(key)) {
										if(!this.gfnIsNull(json[key])) {
											if(json[key] instanceof nexacro.Decimal) {
												json[key] = Number(json[key]);
											}					
										}
									}
								}
							}
						}
						
					}
				} else {
					for (var key in arg) {
						if (arg.hasOwnProperty(key)) {
							if(!this.gfnIsNull(arg[key])) {
								if(arg[key] instanceof nexacro.Decimal) {
									arg[key] = Number(arg[key]);
								}					
							}
						}
					}
				}
				arg = JSON.stringify(arg);
			}
		}

		if (this.parent) {
			this.parent._closeForm(arg);
		}
	};
	
	/*
	 *	그리드 컬럼 사이즈 조정 커서 변경 (col-resize => ew-resize)
	 *  현재 커서 정보 셋팅 추가.
	 */
	_pGrid._resizerStart = function (canvasX, canvasY, cellobj, kind, from_refer_comp) {
		if (this._movingcell) {
			return;
		}

		var resizer_colctrl = this._resizer_colctrl;
		var resizer_rowctrl = this._resizer_rowctrl;

		if ((resizer_colctrl && resizer_colctrl._is_tracking) || (resizer_rowctrl && resizer_rowctrl._is_tracking)) {
			return;
		}

		var r_canvasX = canvasX;
		var r_canvasY = canvasY;
		var rowidx = cellobj._rowidx;
		var cellidx = cellobj._cellidx;

		if (cellobj._is_alive == false) {
			if (rowidx == -1) {
				cellobj = this._getCurrentHeadCell(cellidx, true);
			}
			else {
				cellobj = this._getCurrentBodyCell(rowidx, cellidx);
			}
		}

		if (!cellobj) {
			return;
		}

		var area = (cellobj._refinfo) ? cellobj._refinfo._area : "";
		var band = (cellobj._band) ? cellobj._band.id : "";
		if (band == "summary") {
			band = "summ";
		}
		if (area == "body") {
			r_canvasX += this._getScrollLeft();
		}
		if (band == "body") {
			if (!cellobj.parent._fixed) {
				r_canvasY += this._getScrollTop();
			}
		}

		var action = false;
		var resize_cursor;
		var resizer_range;
		var resizer_arr_length;
		var i;
		var range;

		if (resizer_colctrl && !resizer_colctrl._is_tracking) {
		
			document.getElementById(resizer_colctrl._unique_id).onclick = function() { console.log('1'); };
				
			resize_cursor = nexacro.CursorObject("ew-resize");
			resizer_range = this._resizerColRange;
			resizer_arr_length = resizer_range.length;

			if (resizer_arr_length > 0) {
				resizer_colctrl._is_range = false;

				for (i = 0; i < resizer_arr_length; i++) {
					range = resizer_range[i];

					if (r_canvasX >= (range.left - 2) && r_canvasX <= (range.right + 2)) {
						if (area != range.area) {
							continue;
						}

						if (r_canvasY >= range.top && r_canvasY <= range.bottom) {
							this.a = r_canvasX;
							resizer_colctrl._is_range = true;
							resizer_colctrl._setIndex(range.index);
							this._setGlobalCursor(resize_cursor, cellobj, cellobj);
							this._cursor = resize_cursor.value;
							action = true;
							break;
						}
					}
				}
			}
			if (!resizer_colctrl._is_range && !resizer_colctrl._is_tracking && (!resizer_rowctrl || !resizer_rowctrl._is_tracking)) {
				if (cellobj._type_name != "GridCellControl") {
					this._setGlobalCursor(null, from_refer_comp, from_refer_comp);
					this._cursor = null;
				}
				else {
					this._setGlobalCursor(null, cellobj, cellobj);
					this._cursor = null;
				}
				action = false;
			}
			else if (resizer_colctrl._is_tracking) {
				this._setGlobalCursor(resize_cursor, cellobj, cellobj);
				action = true;
			}
		}

		if (action) {
			return;
		}

		if (resizer_rowctrl && !resizer_rowctrl._is_tracking) {
			resize_cursor = nexacro.CursorObject("row-resize");
			resizer_range = this._resizerRowRange;
			resizer_arr_length = resizer_range.length;

			if (resizer_arr_length > 0) {
				resizer_rowctrl._is_range = false;

				for (i = 0; i < resizer_arr_length; i++) {
					range = resizer_range[i];

					if (r_canvasY >= range.top && r_canvasY <= range.bottom) {
						if (band != range.area) {
							continue;
						}

						if (r_canvasX >= range.left && r_canvasX <= range.right) {
							resizer_rowctrl._is_range = true;
							resizer_rowctrl._setIndex(range.index);
							this._setGlobalCursor(resize_cursor, cellobj, cellobj);
							break;
						}
					}
				}
			}
			if (!resizer_rowctrl._is_range && !resizer_rowctrl._is_tracking && (!resizer_colctrl || !resizer_colctrl._is_tracking)) {
				if (cellobj._type_name != "GridCellControl") {
					this._setGlobalCursor(null, from_refer_comp, from_refer_comp);
				}
				else {
					this._setGlobalCursor(null, cellobj, cellobj);
				}
			}
			else if (resizer_rowctrl._is_tracking) {
				this._setGlobalCursor(resize_cursor, cellobj, cellobj);
			}
		}
	};
	

	/*
	 *  CompBase/FormBase.js
	 *	로딩 이미지 처리 변경
	 */ 
	if(system.navigatorname != "nexacro"){
	_pMainFrame._waitCursor = function (wait_flag, context) {
		if (this._window) {
			var waitcomp = this._waitcomp;
			if (wait_flag == true) {
				if (this._ref_comm == 0) {
					nexacro._com_waiting = true;

					if (document.getElementById("loading-container") == null) {
						var divWrapper = document.createElement("div");
						divWrapper.setAttribute("id", "loading-wrapper");
						divWrapper.setAttribute("class", "loading-wrapper");
						document.body.appendChild(divWrapper);

						var divLoad = document.createElement("div");
						var divLoad1 = document.createElement("div");
						var divLoad2 = document.createElement("div");
						divLoad.setAttribute("id", "loading-container");
						divLoad.setAttribute("class", "loading-container");
						divLoad1.setAttribute("class", "loading");
						divLoad2.setAttribute("id", "loading-text");
						divLoad2.appendChild(document.createTextNode("loading"));
						divLoad.appendChild(divLoad1);
						divLoad.appendChild(divLoad2);
						document.body.appendChild(divLoad);
					}

					this._window._updateWrapper(true);
					this._window._cancelEvent();
					this._window._blockImeInput(true);
					
					document.getElementById("loading-container").style.display = "block";
					setTimeout(function() {
						document.getElementById("loading-wrapper").style.display = "block";
					}, 10);
				}
				this._ref_comm++;
			}
			else {
				this._window._updateWrapper(false);
				if (this._ref_comm > 0) {
					this._ref_comm--;
				}
				
				if (document.getElementById("loading-container") != null) {
					if (this._ref_comm <= 0) {
						this._ref_comm = 0;
						nexacro._com_waiting = false;
						document.getElementById("loading-container").style.display = "none";
						setTimeout(function() {
							document.getElementById("loading-wrapper").style.display = "none";
						}, 10);
						if (system.navigatorname == "IE") {
							setTimeout(function() {
								document.getElementById("loading-wrapper").setAttribute("noclick", "false");
							}, 500);
						}
					}
				}
			}
		}
	};
	}

	/*
	 *	Form별 로딩 처리
	 */
	 /*
	_pFormBase._waitCursor = function (wait_flag, context) {
		//if (this.getOwnerFrame() != null && this.getOwnerFrame().id.startsWith("frame")) {
		if (this.parent.id != "divWork") {
			var ownerframe = this.getOwnerFrame();
			if (ownerframe) {
				ownerframe._waitCursor(wait_flag, context);
			}
		}
		else {
			if (this.getOwnerFrame() != null && this.getOwnerFrame().form != null) {
				var formID = this.getOwnerFrame().form._unique_id;
				
				if (wait_flag == true) {
					if (this._ref_comm == null) this._ref_comm = 0;
					if (this._ref_comm == 0) {
						if (document.getElementById("loading-container_"+formID) == null) {
							var divWrapper = document.createElement("div");
							divWrapper.setAttribute("id", "loading-wrapper_"+formID);
							divWrapper.setAttribute("class", "loading-wrapper");
							document.getElementById(formID).appendChild(divWrapper);

							var divLoad = document.createElement("div");
							var divLoad1 = document.createElement("div");
							var divLoad2 = document.createElement("div");
							divLoad.setAttribute("id", "loading-container_"+formID);
							divLoad.setAttribute("class", "loading-container");
							divLoad1.setAttribute("class", "loading");
							divLoad2.setAttribute("id", "loading-text");
							divLoad2.appendChild(document.createTextNode("loading"));
							divLoad.appendChild(divLoad1);
							divLoad.appendChild(divLoad2);
							document.getElementById(formID).appendChild(divLoad);
						}
						
						document.getElementById("loading-container_"+formID).style.display = "block";
						setTimeout(function() {
							document.getElementById("loading-wrapper_"+formID).style.display = "block";
						}, 10);
					}
					this._ref_comm++;
				}
				else {
					if (this._ref_comm > 0) {
						this._ref_comm--;
					}
					
					if (document.getElementById("loading-container_"+formID) != null) {
						if (this._ref_comm <= 0) {
							this._ref_comm = 0;
							
							document.getElementById("loading-container_"+formID).style.display = "none";
							setTimeout(function() {
								document.getElementById("loading-wrapper_"+formID).style.display = "none";
							}, 10);
						}
					}
				}
			}
		}
	};
	*/

}