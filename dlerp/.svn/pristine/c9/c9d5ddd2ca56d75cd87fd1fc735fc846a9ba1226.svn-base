(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameWork");
            this.set_titletext("frameWork");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divTitle","15","0",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("frame::frameWorkTitle.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","15","divTitle:0",null,null,"15","20",null,null,null,null,this);
            obj.set_taborder("0");
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
            this._addPreloadList("fdl","frame::frameWorkTitle.xfdl");
        };
        
        // User Script
        this.registerScript("frameWorkDirect.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    frame > frameWork
        *  @FileName 	frameWork.xfdl
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
        this.objApp = this.gfnGetApplication();

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        /**
         * form onload 함수
         * @return
         * @example
         * @memberOf
         */
        this.form_onload = function(obj,e)
        {
        	this.form_onsize();
        	//this.divTitle.form.set_scrollbartype("none");

        	var url;
        	if(system.navigatorname == "nexacro") {
        		url = nexacro.getApplication().xadl;
        	} else {
        		url = window.location.href;
        	}
        	var param = this.gfnGetUrlParam(url);
        	if (param.ID_FORM != null) {
        		// 권한,화면정보 가져오기
        		var pageModule = param.ID_FORM.substr(0, 3).toLocaleLowerCase();
        		var idForm = param.ID_FORM.toUpperCase();

        		// 파라미터 셋팅
        		var keys = Object.keys(param);
        		var frm = this.getOwnerFrame();
        		for(var i = 0; i < keys.length; i++) {
        			if(keys[i] == "ID_FORM") continue;
        			frm[keys[i]] = decodeURIComponent(param[keys[i]]);
        		}
        		this.objApp.gvLeftFrame.form.fnAuthForm(this, '', idForm, "type=ext callback=fnCallback_Direct");

        	} else {
        		// 잘못된 정보 창닫기

        		return;
        	}

        };

        this.fnCallback_Direct = function(oObj) {

        		var pageModule = oObj.ID_FORM.substr(0, 3).toLocaleLowerCase();
        		var idForm = oObj.ID_FORM.toUpperCase();
        		var sPageUrl = pageModule + "::" + idForm + ".xfdl";

        		this.getOwnerFrame().arguments = [];
        		this.getOwnerFrame().arguments["ID_WIN"] = oObj.CD_MODULE + "#" + oObj.ID_FORM;
        		this.getOwnerFrame().arguments["CD_MODULE"] = oObj.CD_MODULE;
        		this.getOwnerFrame().arguments["ID_FORM"] = oObj.ID_FORM;
        		this.getOwnerFrame().arguments["NM_FORM"] = oObj.NM_FORM;
        		this.getOwnerFrame().arguments["ID_GROUP"] = oObj.ID_GROUP;
        		this.getOwnerFrame().arguments["GR_SEARCH"] = oObj.GR_SEARCH;
        		this.getOwnerFrame().arguments["TY_AUTH"] = oObj.TY_AUTH;
        		this.getOwnerFrame().arguments["DS_FORM"] = oObj.DS_FORM;
        		this.getOwnerFrame().arguments["CD_ROLE"] = oObj.CD_ROLE;
        		this.getOwnerFrame().arguments["DS_PARAM"] = oObj.DS_PARAM;
        		this.getOwnerFrame().arguments["DS_NOTICE"] = oObj.DS_NOTICE;
        		this.getOwnerFrame().arguments["DS_HELP"] = oObj.DS_HELP;
        		this.getOwnerFrame().arguments["pageUrl"] = sPageUrl;
        		this.getOwnerFrame().arguments["Args"] = oObj.Args;
        		this.getOwnerFrame().arguments["BTN_INFO"] = oObj.BtnInfo;

        		//넘어온 아규먼트 셋팅
        		//this.divTopBtn.form.fnSetAuthBtn(this.getOwnerFrame().arguments["TY_AUTH"]);
        		this.divTitle.form.form_onload();

        		// form로딩시 화면에 표시할 page URL 설정
        		this.divWork.set_url(sPageUrl);
        };

        /**
         * form onactivate event
         * @return
         * @example
         *
         * @memberOf
         */
        this.form_onactivate = function(obj,e)
        {
        // 	var winKey = this.objApp.gvWorkFrame.getActiveFrame().name;
        // 	//this.objApp.gvWorkFrame.frames[winKey].setFocus();
        //
        // 	var gRow = this.objApp.gdsOpenMenu.findRow(this.objApp.gvMenuColumns.winId, winKey);
        //
        // 	var dsLMenu = this.objApp.gvLeftFrame.form.dsMenu;
        // 	var menuId = this.objApp.gdsOpenMenu.getColumn(gRow, this.objApp.gvMenuColumns.menuId);
        // 	var lRow = this.objApp.gvLeftFrame.form.dsMenu.findRow(this.objApp.gvMenuColumns.menuId, menuId);
        //
        // 	//메뉴 타이틀
        // 	var sTitle = this.objApp.gdsOpenMenu.getColumn(gRow, "title");
        // 	this.divTitle.form.staTitle.set_text(sTitle);
        //
        // 	// gdsOpenMenu row 이동
        // 	this.objApp.gdsOpenMenu.set_rowposition(gRow);
        };

        /**
         * workFrame_onclose event
         * @return
         * @example
         *
         * @memberOf
         */
        this.form_onclose = function(obj, e)
        {
        	try
        	{
        		//trace("workFrame_onclose : " + e.fromobject.name);
        // 		if (e.fromobject == "[object Form]")
        // 		{
        // 			var winId = this.getOwnerFrame().name;
        // 			//trace("winId : " + winId);
        // 			if (this.objApp.gvMdiFrame.form.bClose)
        // 			{
        // 				this.objApp.gvMdiFrame.form.bClose = false;
        // 				this.objApp.gvMdiFrame.form.fnTabOnClose(winId);
        // 			}
        //		}
        	}
        	catch(e)
        	{

        	}
        }

        /**
         * onsize event
         * @return
         * @example
         *
         * @memberOf this
         */
        this.form_onsize = function(obj, e)
        {
        	this.resetScroll();
        }

        /**
         * @description 각 화면에서 디버그창을 호출할 수 있도록 단축키 지정
        */
        this.form_onkeydown = function(obj,e)
        {
        	// 공통 키다운 이벤트 호출
        	this.gfnOnkeydown(obj, e);
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
        	if(strId == "confirm.before.movepage"){
        		if(strVal == true)
        		{
        			this.close();
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
         *  넘어온 아규먼트 처리 설정
         * @param  {XaComp} this(현재form)
         * @return
         * @example
         * fnSetOwnFrameArgu(this);
         * @memberOf
         */
        this.fnSetOwnFrameArgu = function(o)
        {
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onactivate",this.form_onactivate,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeydown",this.form_onkeydown,this);
        };
        this.loadIncludeScript("frameWorkDirect.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
