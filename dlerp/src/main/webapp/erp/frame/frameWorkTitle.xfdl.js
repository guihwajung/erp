(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameWorkTitle");
            this.set_scrolltype("none");
            this.set_titletext("frameWorkTitle");
            if (Form == this.constructor)
            {
                this._setFormPosition(1054,48);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DZZPR_MYMENU_DETAIL_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"SP\">DZZPR_MYMENU_DETAIL_DELETE</Col><Col id=\"TARGET\">delete</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInsert", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDelete", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","26","15","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("HOME > 1 DEPTH MENU 01 > 2 depth menu 01 > Template 03");
            obj.set_cssclass("sta_WF_Navi");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnHome","-9","7","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_home01");
            this.addChild(obj.name, obj);

            obj = new Button("btnMyMenu","staTitle:10","15","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favourite");
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
        this.registerScript("frameWorkTitle.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    frame > frameWorkTitle
        *  @FileName 	frameWorkTitle.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2017.03.09
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	consulting 	             	최초 생성
        *  2017.10.17     	consulting       	       	주석 정비
        *  2018.01.16		consulting				    gfnGetApplication 공통함수 변경
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.objApp 		= this.gfnGetApplication();
        this.fvMenuId 		= "";
        this.fvMenuNm 		= "";
        this.fvObjArray 	= new Array();
        this.fvTotWidth		= 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        /**
         * @description 화면 온로드
        */
        this.form_onload = function(obj,e)
        {
        	if(typeof(this.getOwnerFrame().arguments) == "object") {
        		this.fvMenuNm = this.getOwnerFrame().arguments["DS_FORM"];
        		this.staTitle.set_text(this.fvMenuNm);
        		this.resetScroll();

        		this.fvMenuId = this.getOwnerFrame().arguments["ID_WIN"];
        		this.fnSetMyMenuBtn();
        	}
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode !== 0)
        	{
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	if(svcID == "save")
        	{
        		this.gfnAlert("즐겨찾기가 등록되었습니다.");
        		this.btnMyMenu.set_cssclass("btn_WF_favouriteOn");
        		this.objApp.gvLeftFrame.form.fnGetMyMenu();
        	}
        	else if(svcID == "remove")
        	{
        		this.gfnAlert("즐겨찾기가 제거되었습니다.");
        		this.btnMyMenu.set_cssclass("btn_WF_favourite");
        		this.objApp.gvLeftFrame.form.fnGetMyMenu();
        	}
        };

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
        this.fnSave = function()
        {
        	var arrArgs = this.fvMenuId.split('#');
        	var oArgs = {
        		'CD_MODULE' : arrArgs[0],
        		'ID_FORM' : arrArgs[1],
        		'NM_FORM' : this.fvMenuNm,
        	};
        	var oOption = {
        		'popuptype' : 'modal'
        	};

        	this.gfnOpenPopup('mymenu_pop', 'dzz::DZZ_MYMENU.xfdl', oArgs, function(svcId, oRtn) {
        		if (oRtn)
        		{
        			switch (oRtn)
        			{
        				case 'save' :
        					this.gfnAlert("즐겨찾기가 등록되었습니다.");
        				case 'retrive' :
        					this.btnMyMenu.set_cssclass("btn_WF_favouriteOn");
        					this.objApp.gvLeftFrame.form.fnGetMyMenu();
        					break;
        			}
        		}
        	}, oOption);
        };

        this.fnRemove = function()
        {
        	var arrArgs = this.fvMenuId.split('#');
        	var objDs = this.objApp.gdsMyMenu;
        	var nRow = objDs.findRowExprNF( "CD_MODULE == $0 && ID_FORM == $1", 0, -1, arrArgs );

        	this.dsDelete.clearData();

        	var gdsUserInfo = this.objApp.gdsUserInfo;
        	var nRow2 = this.dsDelete.addRow();
        	this.dsDelete.setColumn(nRow2, 'ID_USER', gdsUserInfo.getColumn(gdsUserInfo.rowposition, 'ID_USER'));
        	this.dsDelete.setColumn(nRow2, 'CD_CORP', gdsUserInfo.getColumn(gdsUserInfo.rowposition, 'CD_CORP'));
        	this.dsDelete.setColumn(nRow2, 'CD_DEPT', gdsUserInfo.getColumn(gdsUserInfo.rowposition, 'CD_DEPT'));
        	this.dsDelete.setColumn(nRow2, 'CD_MODULE', objDs.getColumn(nRow, 'CD_MODULE'));
        	this.dsDelete.setColumn(nRow2, 'ID_FORM', objDs.getColumn(nRow, 'ID_FORM'));

        	var strSvcId    = "remove";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.fnSetMyMenuBtn = function ()
        {
        	if( !this.fnIsMyMenu() )
        	{
        		this.btnMyMenu.set_cssclass("btn_WF_favourite");
        	}
        	else
        	{
        		this.btnMyMenu.set_cssclass("btn_WF_favouriteOn");
        	}
        };

        this.fnIsMyMenu = function()
        {
        	var arrArgs = this.fvMenuId.split('#');
        	var objDs = this.objApp.gdsMyMenu;
        	return objDs.findRowExprNF( "CD_MODULE == $0 && ID_FORM == $1", 0, -1, arrArgs ) > -1;
        };

        /**
         * @description Left 접고/펼치기 (frameWorkTitle에서 호출)
        */
        this.fnLeftMenuAction = function()
        {
        	if(this.objApp.gvHFrame.separatesize == "0,*")
        	{
        		this.objApp.gvHFrame.set_separatesize("225,*");
        	}
        	else
        	{
        		this.objApp.gvHFrame.set_separatesize("0,*");
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description  즐겨찾기버튼 클릭 이벤트
        */
        this.btnMyMenu_onclick = function(obj,e)
        {
        	if( !this.fnIsMyMenu() )
        	{
        		this.fnSave();
        	}
        	else
        	{
        		this.fnRemove();
        	}

        };

        this.frameWorkTitle_onsize = function(obj,e)
        {
        };

        this.staTitle_onsize = function(obj,e)
        {
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.frameWorkTitle_onsize,this);
            this.btnMyMenu.addEventHandler("onclick",this.btnMyMenu_onclick,this);
        };
        this.loadIncludeScript("frameWorkTitle.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
