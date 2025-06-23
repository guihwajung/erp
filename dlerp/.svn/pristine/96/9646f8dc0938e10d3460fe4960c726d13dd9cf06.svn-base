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
                this._setFormPosition(1054,555);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divTitle","15","0",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("frame::frameWorkTitle.xfdl");
            obj.set_text("해당 화면의 loading 시간은 0.05 Sec 입니다.");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","15","divTitle:0",null,null,"15","20","1236",null,"558",null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLodingTime",null,"7","425","17","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_font("normal bold 14px/normal \"Gulim\",\"Arial\"");
            obj.set_usedecorate("true");
            obj.set_color("orangered");
            obj.set_textAlign("right");
            obj.set_text("해당 화면의 loading 시간은 0.05 Sec 입니다.");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00",null,"48","15",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20px");
            obj.set_background("aquamarine");
            obj.set_opacity("0.5");
            obj.set_visible("false");
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
        this.registerScript("frameWork.xfdl", function() {
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

        	//넘어온 아규먼트 셋팅
        	//this.fnSetOwnFrameArgu(this);
        	//this.divTopBtn.form.fnSetAuthBtn(this.getOwnerFrame().arguments["TY_AUTH"]);

        	// form로딩시 화면에 표시할 page URL 설정
        	if(typeof(this.getOwnerFrame().arguments) == "object") {
        		this.divWork.set_url(this.getOwnerFrame().arguments["pageUrl"]);
        	} else {
        		this.divWork.set_url("dz::dzz/DZZ_TEMP.xfdl");
        	}
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
        		if (e.fromobject == "[object Form]")
        		{
        			var winId = this.getOwnerFrame().name;
        			//trace("winId : " + winId);
        			if (this.objApp.gvMdiFrame.form.bClose)
        			{
        				this.objApp.gvMdiFrame.form.bClose = false;
        				this.objApp.gvMdiFrame.form.fnTabOnClose(winId);
        			}
        		}
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
        // 	if(this.objApp.gvIsComBtnUse){	//공통 버튼 사용유무
        // 		//공통 버튼권한세팅
        // 		var sAuth = this.getOwnerFrame().arguments["TY_AUTH"];
        // 		this.divTitle.form.fnSetAuthBtn(sAuth);
        // 	}
        }

        /**
         * gdsMenu에서 버튼권한 가져오기
         * @param {string} menuId: 메뉴Id
         * @param {string} colId: 컬럼(권한별) Id
         * @return
         * @example
         *
         * @memberOf
         */
        this.fnGetAuth = function(menuId, colId)
        {
        	var sValue = ""; //this.objApp.gdsMenu.lookupAs(this.objApp.gvMenuColumns.menuId, menuId, colId);
        	if(this.gfnIsNull(sValue))
        	{
        		sValue = "R";
        	}
        	return sValue;
        }

        /**
         * @description workFrame close 시 처리
        */
        this.fnWorkFrameClose = function()
        {
        	if(this.gfnIsNull(this.divWork.form.lookup("fnClose")))
        	{
        		if(this.gfnIsCloseFormStatus(this.divWork.form) == false) {
        			this.fnConfirmClose();
        			return false;
        		}
        	}else{
        		if(this.divWork.form.fnClose() == false)
        		{
        			//this.fnConfirmClose();
        			return false;
        		}else{
        			//this.close();
        		}
        	}
        	this.close();
        	return true;
        }

        this.fnConfirmClose = function() {
        	var sMsgId = "confirm.before.movepage";							//메세지ID
        	var arrArg = "";												//메세지취환될값 배열[생략가능]
        	var sPopId = sMsgId;											//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        	var sMsgCallback = "fnMsgCallback";								//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        	// 변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?
        	this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
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
        this.loadIncludeScript("frameWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
