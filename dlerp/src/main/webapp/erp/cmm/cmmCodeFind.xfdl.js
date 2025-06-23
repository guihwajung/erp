(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCodeFind");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,25);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("CDTextBox","0","0","68",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("BtnSearch","CDTextBox:3","0","25",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_CF_Search");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("DSTextBox","BtnSearch:3","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_value("");
            obj.set_tabstop("false");
            obj.set_cssclass("borderBG");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmCodeFind.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.SearchText = "";
        this.ChangeText = false;
        this.SelectedData = [];
        this.OrgWidth = 0;
        this.FitToContents = null;
        this.AutoSet = true;
        this.EnableEvent = true;
        this.IsSearch = false;

        this.set_enableevent = function(en) {
        	this.EnableEvent = en;
        };

        this.set_readonly = function(ro) {
        	this.CDTextBox.set_readonly(ro);
        	this.BtnSearch.set_enable(!ro);
        	this.DSTextBox.set_readonly(true);

        	this.CDTextBox.set_cssclass("");
        	if( ro ) {
        		this.CDTextBox.set_cssclass("borderBG");
        	}
        };
        this.set_readonly_ds = function(ro) {
        	this.DSTextBox.set_readonly(ro);
        };

        this.set_multiselect = function(yn) {
        	this.MultiSelect = (yn == true ? "Y" : "N");
        };

        this.cmmCodeFind_onload = function(obj,e)
        {
        	if(this.parent.onload == "false") return;
        	this.fnResetScroll();

        	if(!this.gfnIsNull(this.parent.readonly)) {
        		this.set_readonly(this.parent.readonly);
        	}
        	if(this.parent.FitToContents == "true") {
        		this.FitToContents = true;
        	} else if(this.parent.FitToContents == "false") {
        		this.FitToContents = false;
        	}
        	if(this.parent.AutoSet == "false") {
        		this.AutoSet = false;
        	}
        	if(this.parent.IsSearch == "true") {
        		this.parent.IsSearch = true;
        	} else {
        		this.parent.IsSearch = this.IsSearch;
        	}

        	// 특정 코드파인드 관련 처리
        	this.fnSetCodeFindSpc();
        };

        // 코드파인드 전체 width 또는 CDTextWidth 수동 조정시 나머지 부분 계산후 resetScroll 위한 함수
        // ex) this.divSearch.form.ccfCD_SITE.CDTextWidth = 80;
        //     this.divSearch.form.ccfCD_SITE.form.fnResetScroll();
        this.fnResetScroll = function() {
        	this.OrgWidth = this.parent.form.width;
        	this.OrgHeight = this.parent.form.height;
        	this.set_width(this.OrgWidth);
        	this.set_height(this.OrgHeight);
        	this.BtnSearch.set_width(this.OrgHeight);

        	var cwidth = new String(this.parent.CDTextWidth).replace("px", "");
        	this.CDTextBox.set_width(cwidth);
        	this.resetScroll();
        };

        this.BtnSearch_onclick = function(obj,e)
        {
        	this.SearchText = "";
        	this.fnPopup(false, true);

        	//this.pdvCodefind.set_initvalueid(this.CodeFindName);
        	//this.pdvCodefind.form.fnSelect(this.CodeFindName);
        	//this.pdvCodefind.trackPopupByComponent(this,nLeft,nTop, null, null, "fnCodeFindCallback");
        };

        this.fnPopup = function(manual, isBtn, isAsync) {
        	if(manual == null) manual = false;
        	if(isBtn == null) isBtn = false;
        	var xy = this.gfnConvertXY(this.objApp.mainframe, [20,20], this.BtnSearch);
        	var title;
        	if(!this.gfnIsNull(this.parent.Title)) {
        		title = this.parent.Title;
        	}
        	var oArg = { Area: this, Search: this.SearchText, CodeFindName: this.parent.CodeFindName, BeforeUserDataSetParam: this.parent.BeforeUserDataSetParam, Manual: manual, IsBtn: isBtn, MultiSelect: this.MultiSelect, Async: isAsync };
        	var oOption = {popuptype:"codefind", title:title, top: xy[1], left: xy[0]};	//top, left를 지정하지 않으면 가운데정렬 //"top=20,left=370"
        	var sPopupCallBack = "fnCodeFindCallback";

        	var sPopupId = JSON.stringify({ CodeFind: this.parent.id + "_pop" });
        	this.gfnOpenPopup(sPopupId,"cmm::cmmCodeFind_Pop.xfdl",oArg,sPopupCallBack,oOption);

        };

        this.fnCodeFindCallback = function(strId, val) {
        	var json = [];
        	this.SelectedData = [];
        	if (!this.gfnIsNull(val)) {
        		json = JSON.parse(val);
        		this.SelectedData = json;

        		if (json.length > 0) {
        			this.CDTextBox.set_value(json[0][this.CDTextFieldName]);
        			this.DSTextBox.set_value(json[0][this.DSTextFieldName]);
        			this.DSTextBox.set_tooltiptext(json[0][this.DSTextFieldName]);
        			this.DSTextBox_onvaluechanged();
        			this.SearchText = json[0][this.CDTextFieldName];
        			this.ChangeText = false;
        		} else {
        			this.fnCodeFindClear();
        		}

        		this.AfterCDTextChanged();
        	}
        	else if (this.ChangeText) {
        		this.fnCodeFindClear();
        		this.ChangeText = false;

        		this.AfterCDTextChanged();
        	}
        };

        this.fnCodeFindClear = function(isFocus) {
        	if(isFocus==null) isFocus = true;
        	this.SelectedData = [];
        	this.CDTextBox.set_value("");
        	this.DSTextBox.set_value("");
        	this.DSTextBox.set_tooltiptext("");
        	this.DSTextBox_onvaluechanged();
        	if(isFocus) {
        		this.CDTextBox.setFocus();
        	}
        };

        this.CDTextBox_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        // 		if (this.parent.IsSearch == true) {
        // 			if(this.EnableEvent && (this.SearchText != this.CDTextBox.text || this.gfnIsNull(this.DSTextBox.text))) {
        // 				if (!this.gfnIsNull(this.CDTextBox.text)) {
        // 					this._IsEnter = true;
        //  					this.ChangeText = true;
        //  					this.SearchText = this.CDTextBox.text;
        // 					this.fnPopup();
        // 				}
        // 			}
        // 		} else {
        			this.DSTextBox.setFocus();
        //		}
        	}
        };

        this.CDTextBox_onchanged = function(obj,e)
        {
        // 	if (this.parent.IsSearch == true) {
        // 		if (this._IsEnter == true) {
        // 			this._IsEnter = false;
        // 		} else {
        // 			this.ChangeText = true;
        // 			this.SearchText = this.CDTextBox.text;
        // 			this.DSTextBox.set_value("");
        // 			this.DSTextBox.set_tooltiptext("");
        // 			this.AfterCDTextChanged();
        // 		}
        // 	} else {
        		if (this.gfnIsNull(this.CDTextBox.text)) {
        			this.fnCodeFindClear();
        			this.AfterCDTextChanged();
        		} else {
        			this.ChangeText = true;
        			this.SearchText = this.CDTextBox.text;
        			if(this.EnableEvent) {
        				this.fnPopup();
        			}
        		}
        //	}
        };

        this.AfterCDTextChanged = function() {
        	if (!this.gfnIsNull(this.parent.AfterCDTextChanged)) {
        		var oForm = this.gfnGetWorkForm(this.getOwnerFrame()); //this.getOwnerFrame().form.divWork.form;
        		var func = oForm.lookupFunc(this.parent.AfterCDTextChanged);
        		if (func != null) {
        			func.call(this.parent.id, this.SelectedData);
        		}
        	}
        };

        this.fnSetCodeFindSpc = function() {

        	var FormInfo = this.gfnGetFormArguments(this); //this.getOwnerFrame().arguments;
        	var AuthClient = this.objApp.gvUserInfo;
        	var oForm = this.gfnGetWorkForm(this.getOwnerFrame()); //this.getOwnerFrame().form.divWork.form;
        	var codeFindId = this.parent.id;
        	switch(this.parent.CodeFindName) {
        		case "DZX_CFCORP_STD":
        			if(this.FitToContents == null) {
        				this.FitToContents = true;
        			}
        			this.FitToContents = false;

        			// this.parent.set_maxwidth(350);
        			var cd_corp = "";
        			var ds_corp = "";
        			if(this.gfnIsNull(FormInfo.GR_SEARCH) || nexacro.toNumber(FormInfo.GR_SEARCH) > 1)
        			{
        				/*
        				var label = this.parent.left;
        				if (!this.gfnIsNull(label) && label.startsWith('sta')) {
        					label = label.substr(0, label.indexOf(':'));

        					var parent = this.getParentContext();
        					parent[label].set_left(-10);
        					parent[label].set_width(0);
        					parent[label].set_visible(false);
        				}

        				this.parent.set_width(0);
        				this.parent.set_visible(false);
        				*/

        				this.set_readonly(true);
        				if(!this.gfnIsNull(this.objApp.DZ_SPACE98)) {
        					cd_corp = this.objApp.DZ_SPACE98;
        					ds_corp = this.objApp.DZ_SPACE99;
        				} else {
        					cd_corp = AuthClient.CD_CORP;
        					ds_corp = AuthClient.DS_CORP;
        				}
        			} else {
        				if(!this.gfnIsNull(this.objApp.DZ_SPACE98)) {
        					cd_corp = this.objApp.DZ_SPACE98;
        					ds_corp = this.objApp.DZ_SPACE99;
        				} else {
        					cd_corp = AuthClient.CD_CORP;
        					ds_corp = AuthClient.DS_CORP;
        				}
        			}

        			if(this.AutoSet == true) {
        				this.gfnSetTimer(this, function() {
        					if(this.gfnIsNull(this.CDTextBox.value)) {
        						this.CDTextBox.set_value(cd_corp);
        						this.DSTextBox.set_value(ds_corp);
        						this.DSTextBox.set_tooltiptext(ds_corp);
        						this.DSTextBox_onvaluechanged();
        					}
        				}, 100);
        			}

        			this.parent.BeforeUserDataSetParam = "_fnAutoBeforeUserDataSetParam_" + codeFindId;
        			oForm[this.parent.BeforeUserDataSetParam] = function(id, dsUserParam, nrow) {
        				if(id == codeFindId) {
        					dsUserParam.setColumn(nrow, "CD_CORP", AuthClient.CD_CORP);
        					dsUserParam.setColumn(nrow, "GR_SEARCH", FormInfo.GR_SEARCH);
        				}
        				return true;
        			};

        			if (!this.gfnIsNull(this.parent.AfterCDTextChanged)) {
        				oForm._AfterCDTextChanged = this.parent.AfterCDTextChanged;
        			}
        			var cdTextBox = this.CDTextBox;
        			var dsTextBox = this.DSTextBox;
        			var autoSet = this.AutoSet;
        			this.parent.AfterCDTextChanged = "_fnAutoAfterCDTextChanged_" + codeFindId;
        			oForm[this.parent.AfterCDTextChanged] = function(id, codeFindData) {
        				if(id == codeFindId) {
        					if(autoSet == true && codeFindData.length > 0) {
        						var objApp = nexacro.getApplication();
        						objApp.DZ_SPACE98 = codeFindData[0].CD_CORP;
        						objApp.DZ_SPACE99 = codeFindData[0].DS_CORP;
        					}
        					if(!this.gfnIsNull(oForm._AfterCDTextChanged)) {
        						var func = oForm.lookupFunc(oForm._AfterCDTextChanged);
        						if (func != null) {
        							func.call(codeFindId, codeFindData);
        						}
        					}
        				}
        			}
        			break;
        		case "DHX_CFACNTUNIT_SELECT":
        			/*
        			if(AuthClient.GR_DEPT_ACNT == "01")
        			{
        				this.set_readonly(false);
        			}else
        			{
        				this.set_readonly(true);
        			}
        			*/

        			if(nexacro.toNumber(FormInfo.GR_SEARCH) >= 7)
        			{
        				this.set_readonly(true);
        			}else
        			{
        				this.set_readonly(false);
        			}

        			break;
        		case "DZX_CFSITE":
        			if(this.FitToContents == null) {
        				this.FitToContents = true;
        			}
        			this.parent.set_maxwidth(350);
        			var cd_site = "";
        			var ds_site = "";
        			if(this.gfnIsNull(FormInfo.GR_SEARCH) || nexacro.toNumber(FormInfo.GR_SEARCH) >= 7) { //
        				this.set_readonly(true);
        				if(!this.gfnIsNull(this.objApp.DW_SPACE98)) {
        					cd_site = this.objApp.DW_SPACE98;
        					ds_site = this.objApp.DW_SPACE99;
        				} else {
        					cd_site = AuthClient.CD_SITE;
        					ds_site = AuthClient.DS_SITE;
        				}
        			}
        			else {
        				if(!this.gfnIsNull(this.objApp.DW_SPACE98)) {
        					cd_site = this.objApp.DW_SPACE98;
        					ds_site = this.objApp.DW_SPACE99;
        				} else {
        					cd_site = AuthClient.CD_SITE;
        					ds_site = AuthClient.DS_SITE;
        				}
        			}

        			if(this.AutoSet == true) {
        				this.gfnSetTimer(this, function() {
        					if(this.gfnIsNull(this.CDTextBox.value)) {
        						this.CDTextBox.set_value(cd_site);
        						this.DSTextBox.set_value(ds_site);
        						this.DSTextBox.set_tooltiptext(ds_site);
        						this.DSTextBox_onvaluechanged();
        					}
        				}, 100);
        			}

        			this.parent.BeforeUserDataSetParam = "_fnAutoBeforeUserDataSetParam_" + codeFindId;
        			oForm[this.parent.BeforeUserDataSetParam] = function(id, dsUserParam, nrow) {
        				if(id == codeFindId) {
        					dsUserParam.setColumn(nrow, "CD_CORP", AuthClient.CD_CORP);
        					dsUserParam.setColumn(nrow, "CD_DEPT", AuthClient.CD_DEPT);
        					dsUserParam.setColumn(nrow, "ID_USER", AuthClient.ID_USER);
        					dsUserParam.setColumn(nrow, "GR_SEARCH", FormInfo.GR_SEARCH);
        				}
        				return true;
        			};

        			if (!this.gfnIsNull(this.parent.AfterCDTextChanged)) {
        				oForm._AfterCDTextChanged = this.parent.AfterCDTextChanged;
        			}
        			var cdTextBox = this.CDTextBox;
        			var dsTextBox = this.DSTextBox;
        			var autoSet = this.AutoSet;
        			this.parent.AfterCDTextChanged = "_fnAutoAfterCDTextChanged_" + codeFindId;
        			oForm[this.parent.AfterCDTextChanged] = function(id, codeFindData) {
        				if(id == codeFindId) {
        					if(autoSet == true && codeFindData.length > 0) {
        						var objApp = nexacro.getApplication();
        						objApp.DW_SPACE98 = codeFindData[0].CD_SITE;
        						objApp.DW_SPACE99 = codeFindData[0].DS_SITE;
        					}
        					if(!this.gfnIsNull(oForm._AfterCDTextChanged)) {
        						var func = oForm.lookupFunc(oForm._AfterCDTextChanged);
        						if (func != null) {
        							func.call(codeFindId, codeFindData);
        						}
        					}
        				}
        			}


        			break;
        		// 인사 코드파인드
        		case "DAX_CFBASEINFO_ALL": // 사원코드
        		case "DAX_CFBASEINFO":     // 사원코드
        		case "DAX_MBO_USER":       // 사원코드
        		case "DAX_CFDEPT":         // 부서코드
        			if(nexacro.toNumber(FormInfo.GR_SEARCH) == 9)
        			{
        				this.set_readonly(true);
        			} else
        			{
        				this.set_readonly(false);
        			}
        			break;
        	}
        };

        // 사용자 코드 설정후 명칭등 재로딩을 위한 이벤트
        // 단순 명칭조회는 isAsync true처리로 비동기 처리할것.
        this.fnCodeFindLoad = function(isAsync) {
        	this.ChangeText = true;
        	this.SearchText = this.CDTextBox.text;
        	this.fnPopup(true, false, isAsync);
        };


        // 사용자 명칭 설정후 FitToContents 적용하기
        this.fnFitToContents = function() {
        	this.DSTextBox_onvaluechanged();
        };

        this.DSTextBox_onvaluechanged = function()
        {
        	if(this.FitToContents == true) {
        		var ds_width = this.gfnLengthWidth(this.DSTextBox.value);
        		var cd_width = nexacro.toNumber(this.CDTextBox.width);
        		var ot_width = 31;
        		var tot_width = (cd_width + ot_width + ds_width);
        		if (tot_width < this.OrgWidth) {
        			tot_width = this.OrgWidth;
        			ds_width = (tot_width - cd_width - ot_width);
        		}
        		if(!this.gfnIsNull(this.parent.maxwidth)) {
        			if (tot_width > this.parent.maxwidth) {
        				tot_width = this.parent.maxwidth;
        				ds_width = (tot_width - cd_width - ot_width);
        			}
        		}

        		this.DSTextBox.set_width(ds_width);
        		this.parent.set_width(tot_width);
        		this.set_width(tot_width);
        		this.parent.parent.resetScroll();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.cmmCodeFind_onload,this);
            this.CDTextBox.addEventHandler("onkeydown",this.CDTextBox_onkeydown,this);
            this.CDTextBox.addEventHandler("onchanged",this.CDTextBox_onchanged,this);
            this.BtnSearch.addEventHandler("onclick",this.BtnSearch_onclick,this);
        };
        this.loadIncludeScript("cmmCodeFind.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
