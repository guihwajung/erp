(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameTop");
            this.set_titletext("frameTop");
            this.set_scrolltype("none");
            this.set_scrollbartype("none");
            this.set_cssclass("btn_TF_setting");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,54);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPdivMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"groupId\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"sortNo\" type=\"STRING\" size=\"256\"/><Column id=\"upMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"auth\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelectMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"ID_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MENU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">menu</Col><Col id=\"SP\">DZZPR_DOTNET_MENU_SEARCH</Col></Row><Row><Col id=\"TARGET\">notice</Col><Col id=\"SP\">DZZPR_DOTNET_NOTICELIST_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImage", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","0","0",null,"54","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_TitleBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogOut",null,"17","20","20","15",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("uWord").set("frame.logOut");
            obj.set_cssclass("btn_TF_setting");
            this.addChild(obj.name, obj);

            obj = new Static("staName",null,"17","146","16","btnLogOut:10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("운영자님 환영합니다.sfsdsfsdfsfs");
            obj.set_cssclass("sta_TF_Welcome01");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_cursor("pointer");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","18","14","188","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("목적별 전표 Navigation 구성도");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00",null,"17","4","16","staName:10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("0px none, 1px solid #d4d4d4, 0px none, 0px none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCorp",null,"17","120","16","sta00_00:10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_TF_HDClogo");
            obj.set_fittocontents("width");
            obj.set_verticalAlign("top");
            obj.set_text("GOODCEN ERP");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMenuSearch",null,"9","319","36","staCorp:-110",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("메뉴를 검색하세요.");
            obj.set_cssclass("edi_TF_Search01");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdivMenuSearch","edtMenuSearch:-300","edtMenuSearch:0","280","180",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuSearch","0","0",null,"180","0",null,null,null,null,null,this.pdivMenuSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_TF_Search");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"280\"/></Columns><Rows><Row size=\"24\"/><Row size=\"29\"/></Rows><Band id=\"body\"><Cell text=\"bind:Title\" font=\"10px/normal &quot;Malgun Gothic&quot;\" color=\"lightgray\" cssclass=\"grdMenu_location\"/><Cell row=\"1\" text=\"bind:DS_MENU\"/></Band></Format></Formats>");
            this.pdivMenuSearch.addChild(obj.name, obj);

            obj = new Button("Button01_05_02_00_05_02_02_01","edtMenuSearch:-42","9","36","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_TF_ss01");
            this.addChild(obj.name, obj);

            obj = new Static("staMainAlert","339","120","600","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("RGBA(255,0,0,0.59)");
            obj.set_borderRadius("5px");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,54,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameTop.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    frame > frameTop
        *  @FileName 	frameTop.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2017.03.09
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	consulting 	           	    최초 생성
        *  2017.10.17     	consulting       	        주석 정비
        *  2018.01.16		consulting					gfnGetApplication 공통함수 변경
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.objApp 		= this.gfnGetApplication();
        this.fvTopBtnPrefix = "TOP_";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	//this.divTopBtn.form.set_scrollbartype("none");
        };

        /**
         * @description 화면 onsize시 처리
        */
        this.form_onsize = function(obj,e)
        {

        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description 메세지 콜백
        */
        this.fnMsgCallback = function (strId, strVal)
        {
        	//trace("strId >> " + strId + "   strVal >> " + strVal);
        	if(strId == "confirm.logout"){
        		//trace("strVal : " + strVal);
        		if(strVal)
        		{
        			this.objApp.exit();
        		} else {
        			this.objApp.mainframe._checkAndConfirmClose = this.objApp.gvOrgConfirmFunc;
        		}
        	}
        };

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * 로그인 사용자 세팅
         * @return
         * @example
         *
         * @memberOf
         */
        this.fnSetName = function()
        {
        	var ds_corp  = this.objApp.gdsUserInfo.getColumn(0, "DS_CORP");
        	var ds_hname = this.objApp.gdsUserInfo.getColumn(0, "DS_HNAME");
        	var ds_dept  = this.objApp.gdsUserInfo.getColumn(0, "DS_DEPT");
        	this.staName.set_text(ds_hname + " (" + ds_dept + ")");

        	this.fnSetMain();

        	//this.staCorp.set_text(ds_corp);
        	this.resetScroll();
        };

        this.fnSetMain = function() {
        	// 날자 및 이름 설정
        	var year = this.gfnGetDate().substring(0, 4);
        	var month = this.gfnGetDate().substring(4, 6);
        	var day = this.gfnGetDate().substring(6, 8);
        	var date = new Date(year, parseInt(month) - 1, parseInt(day));
        	var weekDay = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];

        	var ds_hname = this.objApp.gdsUserInfo.getColumn(0, "DS_HNAME")
        	this.objApp.gvMainFrame.form.div00.form.sta00.set_text(year + "." + month + "." + day + weekDay[date.getDay()]);
        	this.objApp.gvMainFrame.form.div00.form.sta01.set_text("<b v='true'>" + ds_hname + "</b>님, 반갑습니다.");

        	// 공지사항 조회
        	this.dsNotice = new Dataset();
        	this.dsNotice.addColumn("TY_SEARCH", "string");
        	this.dsNotice.addColumn("DS_SEARCH", "string");
        	this.dsNotice.addColumn("TY_GUBUN", "string");
        	this.dsNotice.addColumn("CD_CORP", "string");

        	this.dsNotice.clearData();
        	var nrow = this.dsNotice.addRow();
        	this.dsNotice.setColumn(nrow, "TY_SEARCH", "1");
        	this.dsNotice.setColumn(nrow, "DS_SEARCH", "");
        	this.dsNotice.setColumn(nrow, "TY_GUBUN",  "");
        	this.dsNotice.setColumn(nrow, "CD_CORP",   this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));

        	var strSvcId    = "notice";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "notice=dsNotice";
        	var outData     = "dsList=notice0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /**
         * topmenu를 dsMenu로 copy
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnLoad = function ()
        {
        // 	if(this.objApp.gdsDeptInfo.rowcount > 1) {
        // 		this.btnChangeDept.set_width(60);
        // 		this.sta03.set_width(1);
        // 	} else {
        // 		this.btnChangeDept.set_width(0);
        // 		this.sta03.set_width(0);
        // 	}
        };

        this.btnLogOut_onclick = function(obj,e)
        {
        // 	if(system.navigatorname == "nexacro")
        // 	{
        // 		var sMsgId = "confirm.logout";									//메세지ID
        // 		var arrArg = "";												//메세지취환될값 배열[생략가능]
        // 		var sPopId = sMsgId;											//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        // 		var sMsgCallback = "fnMsgCallback";								//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요
        //
        // 		// 변경된 내역을 저장 하시겠습니까?
        // 		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        // 	}
        // 	else
        // 	{
        // 		//window.top.location.reload(true);
        // 		this.gfnConfirm("로그아웃 하시겠습니까?", "fnLogout_callback");
        // 	}

        	var oArgs = {};
        	var oOption = {closebutton : 'false'};
        	this.gfnOpenPopup('profile_popup', 'dzz::DZZ_PROFILE.xfdl', {}, function(svcId, oRtn){}, oOption);
        };

        this.fnLogout_callback = function(strId, val) {
        	if(val == true) {
        		if(window._appUseSSO == null) {
        			window._appUseSSO = true;
        		}

        		if(window._appUseSSO == true) {
        			window.location.href = "/sso/out.do";
        		} else {
        			window.location.href = "/auth/logout.do";
        		}
        	}
        };

        this.edtMenuSearch_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fnMenuSearch(obj.value);
        	}
        };

        this.btnChangeDept_onclick = function(obj,e)
        {
        	this.objApp.gvLoginFrame.form.gfnGyumjikOpen(this.objApp.gdsDeptInfo, true);
        };

        this.staMainAlert_onclick = function(obj,e)
        {
        	this.staMainAlert.set_visible(false);
        };

        this.btnMenuSearch_onclick = function(obj,e)
        {
        	this.fnMenuSearch(this.edtMenuSearch.value);
        };

        this.fnMenuSearch = function(text) {
        	if(this.gfnIsNull(text)) {
        		return;
        	}

        	var userInfo = this.objApp.gvUserInfo;

        	this.dsSelectMenu.clearData();
        	this.dsSelectMenu.addRow();

        	this.dsSelectMenu.setColumn(0, "ID_USER", userInfo.ID_USER);
        	this.dsSelectMenu.setColumn(0, "ID_DEPT", userInfo.CD_DEPT);
        	this.dsSelectMenu.setColumn(0, "CD_CORP", userInfo.CD_CORP);
        	this.dsSelectMenu.setColumn(0, "DS_MENU", text);

        	var strSvcId    = "menu";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "menu=dsSelectMenu";
        	var outData     = "dsMenu=menu0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "menu") {
        		if(this.dsMenu.rowcount > 0) {
        			this.pdivMenuSearch.trackPopupByComponent(this.edtMenuSearch, 20, 36);
        		}
        	} else if (svcID == "notice") {
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			this.objApp.gvMainFrame.form["divNoticeEmpty" + (i + 1)].set_visible(false);
        			var notice = this.objApp.gvMainFrame.form["divNotice" + (i + 1)];

        			notice.form.staSeq.set_text(this.dsList.getColumn(i, "SN_SEQ"));
        			notice.form.staDD.set_text(this.dsList.getColumn(i, "DT_UPDATE").substring(8, 10));
        			notice.form.staYYMM.set_text(this.dsList.getColumn(i, "DT_UPDATE").substring(0, 7).replace("-", "."));

        			notice.form.staTitle.set_text(this.dsList.getColumn(i, "NM_TITLE"));
        			if (this.dsList.getColumn(i, "RM_CONTENT") == "") {
        				notice.form.staContent.set_text("내용이 없습니다.");
        			} else {
        				notice.form.staContent.set_text(this.dsList.getColumn(i, "RM_CONTENT"));
        			}
        		}
        	}
        };

        this.dsMenu_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "Title") {
        		return false;
        	}
        	return true;
        };

        this.pdivMenuSearch_grdMenuSearch_oncelldblclick = function(obj,e)
        {
        	var cd_system = this.dsMenu.getColumn(this.dsMenu.rowposition, "CD_SYSTEM");
        	var cd_module = this.dsMenu.getColumn(this.dsMenu.rowposition, "CD_MODULE");
        	var id_form = this.dsMenu.getColumn(this.dsMenu.rowposition, "ID_FORM");

        	this.fnLeftMenuOpen(cd_system, cd_module, id_form);
        };

        this.fnLeftMenuOpen = function(cd_system, cd_module, id_form)
        {
        	this._SEARCH_CD_SYSTEM = cd_system;
        	this._SEARCH_CD_MODULE = cd_module;
        	this._SEARCH_ID_FORM = id_form;

        	var leftFrame = this.objApp.gvLeftFrame.form;
        	leftFrame.AfterMenuSelect = "AfterMenuSelect";
        	var moduleBtns = leftFrame.objBtns;

        	for(var i = 0; i < moduleBtns.length; i++) {
        		if(moduleBtns[i].val == this._SEARCH_CD_SYSTEM) {
        			if(!moduleBtns[i].getSelectStatus()) {
        				moduleBtns[i].click();
        			} else {
        				this.AfterMenuSelect();
        			}
        		}
        	}
        }

        this.AfterMenuSelect = function() {
        	var leftFrame = this.objApp.gvLeftFrame.form;
        	leftFrame.AfterMenuSelect = null;
        	//var objGrid = leftFrame.divLeft.form.grdTree;
        	var objGrid = leftFrame.divModule.form["grdMenu_"+this._SEARCH_CD_SYSTEM];
        	var dsMenu = leftFrame["dsMenu_"+this._SEARCH_CD_SYSTEM];
        	var frow = dsMenu.findRow("ID_FORM", this._SEARCH_ID_FORM);

        	if(frow > 0) {
        		var cnt = 0;
        		frow = -1;
        		while(frow == -1) {
        			frow = dsMenu.findRow("ID_FORM", this._SEARCH_ID_FORM, frow+1);
        			if(dsMenu.getColumn(frow, "CD_MODULE") != this._SEARCH_CD_MODULE) {
        				frow = -1;
        			}
        			cnt++;
        			if(cnt > 5) break;
        		}
        		if(frow == -1) return;

        		var parentRow = objGrid.getTreeParentRow(frow);
        		if(parentRow > -1) {
        			var arr_row = [];
        			arr_row.push(parentRow);
        			while(!objGrid.isTreeRootRow(parentRow)) {
        				parentRow = objGrid.getTreeParentRow(parentRow);
        				if(parentRow > -1) {
        					arr_row.push(parentRow);
        				} else {
        					break;
        				}
        			}
        			for(var i = arr_row.length-1; i > -1; i--) {
        				objGrid.setTreeStatus(objGrid.getTreeRow(arr_row[i]), true);
        			}
        		}

        		objGrid.selectRow(objGrid.getTreeRow(frow));
        		leftFrame.fnMenuOpen(objGrid, frow);
        	}

        };

        this.fnLeftMenuAction = function()
        {
        	var sCssClass = "";
        	if(this.objApp.gvHFrame.separatesize == "0,*")
        	{
        		this.objApp.gvHFrame.set_separatesize("270,*");
        		//sCssClass = "btn_LF_Close";
        	}
        	else
        	{
        		this.objApp.gvHFrame.set_separatesize("0,*");
        		//sCssClass = "btn_LF_Open";
        	}

        	//this.btnMenuOpen.set_cssclass(sCssClass);

        // 	var iFramesCnt = this.objApp.gvWorkFrame.frames.length;
        // 	for (var i=0; i<iFramesCnt; i++)
        // 	{
        // 		this.objApp.gvWorkFrame.frames[i].form.btnMenuOpen.set_cssclass(sCssClass);
        // 	}
        };


        this.btnMenuOpen_onclick = function(obj,e)
        {
        	this.fnLeftMenuAction();
        }
        this.staName_onclick = function(obj,e)
        {
        	if(this.objApp.gdsDeptInfo.rowcount > 1) {
        		this.objApp.gvLoginFrame.form.gfnGyumjikOpen(this.objApp.gdsDeptInfo, true);
        	}
        };

        this.btn00_onclick = function(obj,e)
        {
        	// Main 페이지
        	//this.objApp.gvVFrameSet1.set_separatesize("60,0,*,0");
        	//this.objApp.gvMainFrame.form.fnShowWork(true);

        	var oOption = {};
        	this.gfnOpenPopup("navigatorPopup", "dh::dhz/DHZ_NAVIGATOR.xfdl", {}, function(svcId, oRtn){
        	}, oOption);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.btnLogOut.addEventHandler("onclick",this.btnLogOut_onclick,this);
            this.staName.addEventHandler("onclick",this.staName_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.edtMenuSearch.addEventHandler("onkeydown",this.edtMenuSearch_onkeydown,this);
            this.pdivMenuSearch.form.grdMenuSearch.addEventHandler("oncellclick",this.pdivMenuSearch_grdMenuSearch_oncellclick,this);
            this.pdivMenuSearch.form.grdMenuSearch.addEventHandler("onkeydown",this.pdivMenuSearch_grdMenuSearch_onkeydown,this);
            this.pdivMenuSearch.form.grdMenuSearch.addEventHandler("oncelldblclick",this.pdivMenuSearch_grdMenuSearch_oncelldblclick,this);
            this.staMainAlert.addEventHandler("onclick",this.staMainAlert_onclick,this);
            this.dsMenu.addEventHandler("cancolumnchange",this.dsMenu_cancolumnchange,this);
        };
        this.loadIncludeScript("frameTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
