(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmFilterList");
            this.set_titletext("데이터필터설정");
            this.set_background("white");
            this.set_border("1px solid gainsboro");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFilter", this);
            obj.set_keystring("S:-sort");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"combo\" type=\"STRING\" size=\"256\"/><Column id=\"sort\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFilterAll", this);
            obj.set_keystring("S:-sort");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"combo\" type=\"STRING\" size=\"256\"/><Column id=\"sort\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("txtSerach","5","5",null,"20","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("검색");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","5","50",null,"215","5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsFilter");
            obj.getSetter("griduserproperty").set("!sort,!rowfix,!colfix,!filter,!initial,checkbox");
            obj.set_autofittype("col");
            obj.set_selecttype("multiarea");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"130\"/><Column size=\"0\"/></Columns><Rows><Row size=\"0\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"데이터\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:value\"/><Cell col=\"2\" text=\"bind:combo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"grdList:5","45","20","5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK",null,"grdList:5","45","20","Button01:5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_tabstop("true");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"5","21","20","5",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text(">");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrev",null,"5","19","20","btnNext:2",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("<");
            this.addChild(obj.name, obj);

            obj = new Button("btnClear","5","grdList:5","35","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAllView","128","29","68","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("전체보기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmFilterList.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    cmm > cmmFilterList (공통 그리드 헤더필터)
        *  @FileName 	cmmFilterList.xfdl
        *  @Creator 	mango
        *  @CreateDate 	2021.03.09
        *  @Desction    그리드 필터
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2021.03.09     	consulting 	                최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	var objApp = this.gfnGetApplication();

        	//초기값 설정
        	var objFilterArray = this.parent.pvFilterArray;
        	var objFilterArrayCombo = this.parent.pvFilterArrayCombo;
        	var oldFilterList = this.parent.pvFilterList;

        	this.fnSetDatasetFilterList(objFilterArray, objFilterArrayCombo, this.dsFilter, oldFilterList);

        	this.gfnSetTimer(this, function() {
        		this.txtSerach.setFocus();
        	}, 1);
        };

        this.fnSetDatasetFilterList = function(objArray, comboArray, objDs, oldArray) {

        	objDs.set_enableevent(false);
        	var isCombo = false;
        	if (comboArray.length > 0) {
        		isCombo = true;
        	}
        	for(var i = 0; i < objArray.length; i++) {
        		var nrow = objDs.addRow();
        		if(isCombo) {
        			objDs.setColumn(nrow, "value", comboArray[i]);
        			objDs.setColumn(nrow, "combo", objArray[i]);
        		} else {
        			objDs.setColumn(nrow, "value", objArray[i]);
        		}
        	}

        	var nrow = objDs.insertRow(0);
        	objDs.setColumn(nrow, "value", "빈값제외");
        	objDs.setColumn(nrow, "combo", "빈값제외");
        	objDs.setColumn(frow, "sort", 2);
        	nrow = objDs.insertRow(0);
        	objDs.setColumn(nrow, "value", "빈값");
        	objDs.setColumn(nrow, "combo", "빈값");
        	objDs.setColumn(frow, "sort", 3);
        	nrow = objDs.insertRow(0);
        	objDs.setColumn(nrow, "value", ":: 전체선택 ::");
        	objDs.setColumn(nrow, "combo", ":: 전체선택 ::");
        	objDs.setColumn(frow, "sort", 4);

        	for(var j = 0; j < oldArray.length; j++) {
        		var val = oldArray[j];
        		if(val == "#empty#") {
        			val = "빈값";
        		}
        		else if(val == "#notempty#") {
        			val = "빈값제외";
        		}

        		var frow = -1;
        		if(isCombo) {
        			frow = objDs.findRowNF("combo", val);
        		} else {
        			frow = objDs.findRowNF("value", val);
        		}
        		if(frow > -1) {
        			objDs.setColumn(frow, "chk", 1);
        			objDs.setColumn(frow, "sort", 1);
        		}
        	}

        	objDs.set_enableevent(true);
        	objDs.updateSortGroup();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 필터설정
        */
        this.fnSetColumn = function()
        {
        	var objDs = this.grdList.getBindDataset();
        	var comboArray = this.parent.pvFilterArrayCombo;
        	var isCombo = false;
        	if (comboArray.length > 0) {
        		isCombo = true;
        	}

        	//체크값 확인
        	var arr_chk = [];
        	for(var i = 0; i < objDs.rowcount; i++) {
        		var chk = objDs.getColumn(i, "chk");
        		if(chk == 1) {
        			var val = objDs.getColumn(i, "value");
        			if(val.indexOf("전체선택") > -1) {
        				continue;
        			}

        			if(val.indexOf("빈값제외") > -1) {
        				arr_chk.push("#notempty#");
        			}
        			else if(val.indexOf("빈값") > -1) {
        				arr_chk.push("#empty#");
        			}
        			else {
        				if(isCombo) {
        					val = objDs.getColumn(i, "combo");
        				}
        				arr_chk.push(val);
        			}
        		}
        	}

        	this.parent.closePopup(JSON.stringify(arr_chk));
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
        * @description  확인버튼클릭
        */
        this.btnOK_onclick = function(obj,e)
        {
        	this.fnSetColumn();
        };

        /**
        * @description  취소버튼클릭
        */
        this.Button01_onclick = function(obj,e)
        {
        	this.parent.closePopup();
        };

        this.dsFilter_oncolumnchanged = function(obj,e)
        {
        	if(e.col == 0) {
        		if(obj.getColumn(e.row, "value").indexOf("전체선택") > -1) {
        			obj.set_enableevent(false);
        			for(var i = 0; i < obj.rowcount; i++) {
        				if(obj.getColumn(i, "value").indexOf("전체선택") > -1) {
        					continue;
        				}
        				if(e.newvalue == 1 && obj.getColumn(i, "value").indexOf("빈값") > -1) {
        					continue;
        				}
        				if(e.newvalue == 1 && obj.getColumn(i, "value").indexOf("빈값제외") > -1) {
        					continue;
        				}

        				obj.setColumn(i, "chk" , e.newvalue);
        			}
        			obj.set_enableevent(true);
        		}
        	}
        };

        this.txtSerach_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this._grd_find_next_click(obj, e);
        	}
        };


        this._grd_find_prev_click = function(obj, e) {
        	this._grd_find_prevnext(obj, e, false);
         };

        this._grd_find_next_click = function(obj, e) {
        	this._grd_find_prevnext(obj, e, true);
        };

        this._grd_find_prevnext = function(obj, e, next) {
        	var search = this.txtSerach.text;
        	var objGrid = this.grdList;
        	if (objGrid._FIND_TEXT_ROWS == null || objGrid._FIND_TEXT != search) {
        		objGrid._FIND_TEXT_ROWS = -1;
        	}
        	var objDs = objGrid.getBindDataset();
        	var expr = [];
        	for(var k=0; k<objGrid.getFormatColCount(); k++){
        		var ds_field = objGrid.getCellProperty("body", k, "text");
        		if(ds_field.indexOf("bind:") > -1) {
        			ds_field = ds_field.replace("bind:", "");
        			expr.push("String("+ds_field+").toLocaleLowerCase().indexOf('" + search.toLocaleLowerCase() + "') > -1");
        		}
        	}
        	if(expr.length > 0) {
        		var crow = objGrid._FIND_TEXT_ROWS;
        		if(next) {
        			crow++;
        		} else {
        			crow--;
        		}

        		if(objGrid._FIND_TEXT_ROWS < 0) {
        			objGrid._FIND_TEXT_ROWS = 0;
        		}

        		var frow = objDs.findRowExpr(expr.join(" || "), crow);
        		objGrid._FIND_TEXT = search;

        		if(frow > -1) {
        			if(!next && frow > crow) {
        				if(crow > 0) {
        					objGrid._FIND_TEXT_ROWS = crow;
        					this._grd_find_prevnext(obj, e, next);
        				} else {
        					objGrid._FIND_TEXT_ROWS = frow;
        				}
        				return;
        			}
        			objGrid._FIND_TEXT_ROWS = frow;

        			// 커서선택을 위한 처리
        			var org_selecttype = objGrid.selecttype;
        			objGrid.set_selecttype("cell");
        			objDs.set_rowposition(objGrid._FIND_TEXT_ROWS);
        			objGrid.set_selecttype(org_selecttype);

        		} else {
        			if(!next) {
        				objGrid._FIND_TEXT_ROWS--;
        				if(objGrid._FIND_TEXT_ROWS > -1) {
        					this._grd_find_prevnext(obj, e, next);
        				}
        				return;
        			}
        		}
        	} else {
        		objGrid._FIND_TEXT_ROWS = 0;
        	}
        };

        this.btnClear_onclick = function(obj,e)
        {
        	var objDs = this.grdList.getBindDataset();
        	objDs.set_enableevent(false);
        	for(var i = 0; i < objDs.rowcount; i++) {
        		objDs.setColumn(i, "chk", 0);
        	}
        	objDs.set_enableevent(true);
        };
        this.grdList_onselectchanged = function(obj,e)
        {
        	if (e.cell == 0 && e.oldrow != e.row) {
        		this._selectchanged = true;
        	}
        };

        this.grdList_onlbuttondown = function(obj,e)
        {
        	if (e.cell == 0) {
        		this._selectchanged = false;
        	}
        };

        this.grdList_onlbuttonup = function(obj,e)
        {
        	if (e.cell == 0) {
        		var objDs = this.grdList.getBindDataset();
        		if (this._selectchanged) {
        			for(var i = obj.selectstartrow[0]; i <= obj.selectendrow[0]; i++) {
        				objDs.setColumn(i, "chk", !objDs.getColumn(i, "chk"));
        			}
        		} else {
        			objDs.setColumn(e.row, "chk", !objDs.getColumn(e.row, "chk"));
        		}
        	}
        };

        this.grdList_onkeydown = function(obj,e)
        {
        	if (e.keycode == 32) {
        		var objDs = this.grdList.getBindDataset();
        		var row = objDs.rowposition;
        		objDs.setColumn(row, "chk", !objDs.getColumn(row, "chk"));
        	}
        };

        this.chkAllView_onchanged = function(obj,e)
        {
        	if(this.chkAllView.value == true) {
        		if (this.dsFilterAll.rowcount == 0) {
        			var objFilterArrayAll = this.parent.pvFilterArrayAll;
        			var objFilterArrayComboAll = this.parent.pvFilterArrayComboAll;
        			var oldFilterList = this.parent.pvFilterList;

        			this.fnSetDatasetFilterList(objFilterArrayAll, objFilterArrayComboAll, this.dsFilterAll, oldFilterList);
        		}
        		this.grdList.set_binddataset("dsFilterAll");
        	} else {
        		this.grdList.set_binddataset("dsFilter");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.txtSerach.addEventHandler("onkeydown",this.txtSerach_onkeydown,this);
            this.grdList.addEventHandler("onselectchanged",this.grdList_onselectchanged,this);
            this.grdList.addEventHandler("onlbuttondown",this.grdList_onlbuttondown,this);
            this.grdList.addEventHandler("onlbuttonup",this.grdList_onlbuttonup,this);
            this.grdList.addEventHandler("onkeydown",this.grdList_onkeydown,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.btnNext.addEventHandler("onclick",this._grd_find_next_click,this);
            this.btnPrev.addEventHandler("onclick",this._grd_find_prev_click,this);
            this.btnClear.addEventHandler("onclick",this.btnClear_onclick,this);
            this.chkAllView.addEventHandler("onchanged",this.chkAllView_onchanged,this);
            this.dsFilter.addEventHandler("oncolumnchanged",this.dsFilter_oncolumnchanged,this);
            this.dsFilterAll.addEventHandler("oncolumnchanged",this.dsFilter_oncolumnchanged,this);
        };
        this.loadIncludeScript("cmmFilterList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
