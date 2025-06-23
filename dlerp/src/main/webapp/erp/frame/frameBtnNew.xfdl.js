(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameBtn");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,43);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnSel","0","15","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tooltiptext("조회[F8]");
            obj.set_cssclass("btn_WF_search01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSav","btnSel:3","15","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tooltiptext("저장");
            obj.set_cssclass("btn_WF_save01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","btnSav:3","15","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tooltiptext("입력");
            obj.set_cssclass("btn_WF_plus01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","btnAdd:3","15","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tooltiptext("삭제");
            obj.set_cssclass("btn_WF_minus01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExl","btnDel:3","15","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tooltiptext("엑셀");
            obj.set_cssclass("btn_WF_excelDown01");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt","btnExl:3","15","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tooltiptext("출력");
            obj.set_cssclass("btn_WF_print01");
            this.addChild(obj.name, obj);

            obj = new Button("btnCls","btnPrt:3","15","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tooltiptext("닫기[ESC]");
            obj.set_cssclass("btn_WF_close01");
            this.addChild(obj.name, obj);

            obj = new Button("btnHlp","btnCls:3","15","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tooltiptext("도움말");
            obj.set_cssclass("btn_WF_help01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnRes","btnCls:3","15","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tooltiptext("초기화");
            obj.set_cssclass("btn_reset");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("splBtn","50%","0","28","10",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelSub","splBtn:0","15","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_search01");
            obj.set_tooltiptext("조회[F8]");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSavSub","btnSelSub:3","15","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_save01");
            obj.set_tooltiptext("저장");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddSub","btnSavSub:3","15","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_plus01");
            obj.set_tooltiptext("입력");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelSub","btnAddSub:3","15","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_minus01");
            obj.set_tooltiptext("삭제");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExlSub","btnDelSub:3","15","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_excelDown01");
            obj.set_tooltiptext("엑셀");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnResSub","btnExlSub:3","15","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_reset");
            obj.set_tooltiptext("초기화");
            obj.set_visible("false");
            obj.set_enable("false");
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
        this.registerScript("frameBtnNew.xfdl", function() {
        /**
        *  표준화 작업
        *  @MenuPath    frame > frameBtn
        *  @FileName 	frameBtn.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2017.03.09
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.objApp 		= this.gfnGetApplication();
        this.fvObjArray 	= new Array();
        this.fvTotWidth		= 0;
        this.fvOnSize		= true;
        this.fvIsSub		= false;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        /**
         * @description 화면 온로드
        */
        this.form_onload = function(obj,e)
        {
        	if(this.getOwnerFrame().type == "dialog") {
        	} else {
        		//this.fnSetAuthBtn(this.getOwnerFrame().arguments["TY_AUTH"]);
        	}
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description  폼권한에 따른 공통버튼 visible처리(6자리)
        */
        this.fnSetAuthBtn = function(sAuth) //, oFrame, active)
        {
        	//if(active == null) active = false;
        	var oForm = this.gfnGetWorkForm(this.getOwnerFrame()); //this.parent.parent.divWork.form;
        	//var oForm = this.parent.parent;	// frameBtnNew : 화면내 공통버튼 위치시
        	this.fnSetAuthBtnForm(sAuth, oForm); //, active);

        	if(!this.gfnIsNull(oForm.FormInfo.DS_HELP)) {
        		this.btnHlp.set_visible(true);
        	}
        };

        this.fnSetAuthBtnForm = function(sAuth, oForm) //, active)
        {
        	if (!this.gfnIsNull(sAuth)) {
        		this.fnSetDefaultBtn();
        		//this.fnSetVisibleSub(false);

        		this.gfnSetFormButton(sAuth, oForm, this, false); //, active);
        	} else {
        		this.fnSetEnableBtn(false);
        	}
        };

        this.fnSetDefaultBtn = function()
        {
        	this.gfnSetEnable(this.btnSel, true);
        	this.gfnSetEnable(this.btnAdd, false);
        	this.gfnSetEnable(this.btnDel, false);
        	this.gfnSetEnable(this.btnSav, false);
        	this.gfnSetEnable(this.btnExl, false);
        	this.gfnSetEnable(this.btnPrt, true);
        	this.gfnSetEnable(this.btnCls, true);

        	this.gfnSetEnable(this.btnSelSub, true);
        	this.gfnSetEnable(this.btnAddSub, false);
        	this.gfnSetEnable(this.btnDelSub, false);
        	this.gfnSetEnable(this.btnSavSub, false);
        	this.gfnSetEnable(this.btnExlSub, false);
        };

        this.fnSetEnableBtn = function(enable)
        {
        	this.gfnSetEnable(this.btnSel, enable);
        	this.gfnSetEnable(this.btnAdd, enable);
        	this.gfnSetEnable(this.btnDel, enable);
        	this.gfnSetEnable(this.btnSav, enable);
        	this.gfnSetEnable(this.btnExl, enable);
        	this.gfnSetEnable(this.btnPrt, enable);
        	//this.gfnSetEnable(this.btnCls, enable);

        	this.gfnSetEnable(this.btnSelSub, enable);
        	this.gfnSetEnable(this.btnAddSub, enable);
        	this.gfnSetEnable(this.btnDelSub, enable);
        	this.gfnSetEnable(this.btnSavSub, enable);
        	this.gfnSetEnable(this.btnExlSub, enable);
        };

        this.fnSetVisibleSub = function(visible)
        {
        	this.fvIsSub = visible;
        	this.btnSelSub.set_visible(visible);
        	this.btnAddSub.set_visible(visible);
        	this.btnDelSub.set_visible(visible);
        	this.btnSavSub.set_visible(visible);
        	this.btnExlSub.set_visible(visible);
        };

        this.fnSetVisibleButton = function(visible)
        {
        	this.btnSel.set_visible(visible);
        	this.btnAdd.set_visible(visible);
        	this.btnDel.set_visible(visible);
        	this.btnSav.set_visible(visible);
        	this.btnExl.set_visible(visible);
        	this.btnPrt.set_visible(visible);
        	this.btnRes.set_visible(visible);
        	this.btnCls.set_visible(visible);
        	this.btnHlp.set_visible(visible);
        	this.btnSelSub.set_visible(visible);
        	this.btnAddSub.set_visible(visible);
        	this.btnDelSub.set_visible(visible);
        	this.btnSavSub.set_visible(visible);
        	this.btnExlSub.set_visible(visible);
        	this.btnResSub.set_visible(visible);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        /**
         * @description  공통버튼클릭이벤트
        */
        this.fnBtnClick = function(obj,e)
        {
        // 	if (this.objApp.gvWorkFrame.getActiveFrame() == null) {
        // 		return;
        // 	}

        	var oForm = this.gfnGetWorkForm(this.getOwnerFrame()); //this.parent.parent.divWork.form;
        	//var oForm = this.parent.parent;	// frameBtnNew : 화면내 공통버튼 위치시
        // 	if(this.objApp.gvWorkFrame.getActiveFrame().form.divWork != null) {
        // 		oForm = this.objApp.gvWorkFrame.getActiveFrame().form.divWork.form;
        // 	}
        	var sName = String(obj.name).substr(3);

        	if (system.navigatorname == "IE" && e.button == "lbutton" && (sName == "Sel" || sName == "Sav")) {
        		if (document.getElementById("loading-wrapper").getAttribute("noclick") == "true") {
        			document.getElementById("loading-wrapper").setAttribute("noclick", "false");
        			return;
        		}
        		document.getElementById("loading-wrapper").setAttribute("noclick", "true");
        	}

            switch(sName) {
        		case "Sel":
        			oForm._BTN_CLICK = "Y";
        			this.gfnSetFormStatus(oForm, "");
        			oForm.fnSelect();
        			break;
        		case "Add":
        			oForm.fnAdd();
        			break;
        		case "Sav":
        			oForm._BTN_CLICK = "S";
        			oForm.fnSave();
        			break;
        		case "Del":
        			oForm.fnDel();
        			break;
        		case "Exl":
        			oForm.fnExcel();
        			break;
        		case "Prt":
        			if(oForm.fnPrint == null || (oForm.fnPrint != null && oForm.fnPrint() != false)) {
        				//system.print(oForm);
        				this.fnRealPrint();
        			}

        			break;
        		case "Cls":
        			if(this.parent.ispop == "true") {
        				//this.parent.parent.fnWorkFrameClose();
        				this.getOwnerFrame().form.fnWorkFrameClose();
        			}
        			else if(this.parent.isdirect == "true") {
        				window.close();
        			}
        			else {
        				var winID = this.objApp.gvWorkFrame.getActiveFrame().arguments["ID_WIN"];
        				var rtn = this.objApp.gvWorkFrame.getActiveFrame().form.fnWorkFrameClose();
        				if(rtn) {
        					this.objApp.gvMdiFrame.form.fnTabOnClose(winID);
        				}
        			}
        			break;
        		case "Hlp":
        			if(!this.gfnIsNull(oForm.FormInfo.DS_HELP)) {
        				window.open(oForm.FormInfo.DS_HELP,'_help','width='+window.innerWidth);
        			}
        			break;

        		case "SelSub":
        			oForm._BTN_SUB_CLICK = "Y";
        			this.gfnSetFormSubStatus(oForm, "");
        			oForm.fnSelectSub();
        			break;
        		case "AddSub":
        			oForm.fnAddSub();
        			break;
        		case "SavSub":
        			oForm._BTN_SUB_CLICK = "S";
        			oForm.fnSaveSub();
        			break;
        		case "DelSub":
        			oForm.fnDelSub();
        			break;
        		case "ExlSub":
        			oForm.fnExcelSub();
        			break;
        		default:
            }
        }

        this.fnRealPrint = function()
        {
        	//var pForm = this.parent.parent.parent.parent;
        	//var pWork = this.parent.parent;
        	var pForm = this.parent.parent;
        	var pWork = this.gfnGetWorkForm(this.getOwnerFrame()); //pForm.divWork.form;
        	var height1 = 0;
        	var height2 = 0;
        	var height3 = 0;
        	var real_height = 0;
        	if(pForm._adjust_height != null) {
        		height1 = pForm._adjust_height;
        	}
        	if(pWork._adjust_height != null) {
        		height2 = pWork._adjust_height;
        	}
        	var el = document.getElementById(pWork.divData.form._unique_id);
        	if(el.children.length > 0) {
        		real_height = el.children[0].scrollHeight;
        		real_height += 100;
        // 		if(el.children[0].children.length > 0) {
        // 			if(el.children[0].children[0].style.height != null) {
        // 				real_height = Number(el.children[0].children[0].style.height.replace("px", ""));
        // 				real_height += 100;
        // 			}
        // 		}
        	}
        	height3 = height1 - height2;

        	pForm.height1 = height1;
        	pForm.height2 = height2;
        	pForm.height3 = height3;
        	pForm.real_height = real_height;

        	//pWork.set_height(real_height);
        	var dBottom = 0;
        	if(pWork["divData"] != null) {
        		dBottom = pWork.divData.bottom;
        		pWork.divData.set_height(real_height);
        	}

        	system.print(pForm);
        	var divData = pWork.divData;
        	setTimeout(function() {
        		divData.set_bottom(dBottom);
        	}, 200);
        }

        this.fnSetCommonBtn = function()
        {
        	this._fnSetCommonBtnProc();

        	if(this.fvIsSub) {
        		this._fnSetCommonBtnProc("Sub");
        	}

        	this.resetScroll();
        }

        this._fnSetCommonBtnProc = function(sub) {
        	if(sub==null) sub = "";
        	var prevBtn = "btnSel"+sub;

        	if (this["btnSav"+sub].visible == false){

        	} else {
        		this["btnSav"+sub].set_left(prevBtn+":3");
        		prevBtn = "btnSav"+sub;
        	}
        	if (this["btnAdd"+sub].visible == false){

        	} else {
        		this["btnAdd"+sub].set_left(prevBtn+":3");
        		prevBtn = "btnAdd"+sub;
        	}
        	if (this["btnDel"+sub].visible == false){

        	} else {
        		this["btnDel"+sub].set_left(prevBtn+":3");
        		prevBtn = "btnDel"+sub;
        	}

        	if (this["btnExl"+sub].visible == false){

        	} else {
        		this["btnExl"+sub].set_left(prevBtn+":3");
        		prevBtn = "btnExl"+sub;
        	}
        	if(sub == "") {
        		if (this["btnPrt"+sub].visible == false){

        		} else {
        			this["btnPrt"+sub].set_left(prevBtn+":3");
        			prevBtn = "btnPrt"+sub;
        		}
        		this["btnCls"+sub].set_left(prevBtn+":3");
        	}
        }

        this.fnSetBtn = function()
        {
        	this.fvTotWidth = 0; //right기준값
        	this.fvTotWidthL = 5; //right기준값 (왼쪽 서브용)
        	var nGap = 3;    //버튼사이 폭
        	var nTop = 16;

        	if(this.fvObjArray.length > 0) {
        		// 마지막 버튼 우측 지정
        // 		var prevObj = this[this.fvObjArray[this.fvObjArray.length-1].id];
        // 		if (prevObj.visible){
        // 			prevObj.move(null, 15, prevObj.getOffsetWidth(), prevObj.getOffsetHeight(), nRigth);
        // 		}

        		for(var i = (this.fvObjArray.length - 1); i > -1; i--) {
        			var sObj = this[this.fvObjArray[i].id];
        			if (sObj.visible){
        				if(!this.gfnIsNull(this.fvObjArray[i].grp)) {
        					if(Number(sObj.getOffsetWidth()) < 80) {
        						sObj.set_fittocontents("none");
        						sObj.setOffsetWidth(80);
        					}
        				}
        				if(this.fvObjArray[i].pos == "L") {
        					sObj.move(null, nTop, sObj.getOffsetWidth(), sObj.getOffsetHeight(), "splBtn:"+this.fvTotWidthL+"px");
        					this.fvTotWidthL = this.fvTotWidthL + nexacro.toNumber(nGap) + nexacro.toNumber(sObj.getOffsetWidth());
        				} else {
        					var padding = 0;
        					if(sObj.id.startsWith("staPart")) {
        						padding = 5;
        					}

        					sObj.move(null, nTop, sObj.getOffsetWidth(), sObj.getOffsetHeight(), this.fvTotWidth+padding);
        					this.fvTotWidth = this.fvTotWidth + nexacro.toNumber(nGap) + nexacro.toNumber(sObj.getOffsetWidth()) + (padding*2);
        				}
        			}
        		}

        		// 2번째 버튼부터는 상대좌표로
        // 		if(this.fvObjArray.length > 1) {
        // 			for(var i = (this.fvObjArray.length - 2); i > -1; i--) {
        // 				var sObj = this[this.fvObjArray[i].id];
        // 				sObj.set_right(prevObj.id+":5");
        // 				prevObj = sObj;
        // 			}
        // 		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnSel.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnSav.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnAdd.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnDel.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnExl.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnPrt.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnCls.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnHlp.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnRes.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnSelSub.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnSavSub.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnAddSub.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnDelSub.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnExlSub.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnResSub.addEventHandler("onclick",this.fnBtnClick,this);
        };
        this.loadIncludeScript("frameBtnNew.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
