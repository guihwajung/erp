(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("공지사항관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(760,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCZPR_BBS_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCZPR_BBS_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TY_SAVE\" type=\"STRING\" size=\"1\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"10\"/><Column id=\"NM_TITLE\" type=\"STRING\" size=\"300\"/><Column id=\"RM_CONTENT\" type=\"STRING\" size=\"4000\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"10\"/><Column id=\"NM_USER\" type=\"STRING\" size=\"20\"/><Column id=\"NO_HIT\" type=\"INT\" size=\"4\"/><Column id=\"DT_SHOW_FR\" type=\"STRING\" size=\"8\"/><Column id=\"DT_SHOW_TO\" type=\"STRING\" size=\"8\"/><Column id=\"TY_ISTOP\" type=\"INT\" size=\"4\"/><Column id=\"TY_POPUP\" type=\"STRING\" size=\"1\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"20\"/><Column id=\"DT_INSERT\" type=\"STRING\" size=\"10\"/><Column id=\"ID_UPDATE\" type=\"STRING\" size=\"20\"/><Column id=\"DT_UPDATE\" type=\"STRING\" size=\"10\"/><Column id=\"FILE_CNT\" type=\"INT\" size=\"4\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SN_SEQ\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("공지사항관리");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_GONGJI","0","40","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM","0",null,"87","30",null,"29",null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT","0","98","87",null,null,"staDT_CONFIRM:-1",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVAL","0",null,"87","30",null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("등록일시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_GONGJI:-1","40",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","86",null,null,"30","0","29",null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staDS_CONTENT:-1","98",null,null,"0","staBg3:-1",null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","86",null,null,"30","0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_GONGJI","staDS_GONGJI:5","45",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM00","50.00%",null,"87","30",null,"29",null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_HNAME","92",null,null,"20","staDT_CONFIRM00:5","34",null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVAL00","50.00%",null,"87","30",null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("수정일시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDT_INSERT","92",null,null,"20","staTY_APPROVAL00:5","5",null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("edtDS_CONTENT","staDS_CONTENT:5","edtDS_GONGJI:39",null,null,"5","staDT_CONFIRM00:5",null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_autoselect("false");
            obj.set_enableevent("true");
            obj.set_accessibilitydesclevel("all");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDT_UPDATE","staTY_APPROVAL00:5",null,null,"20","5","5",null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtFILE_CNT","staDT_CONFIRM00:5",null,null,"20","5","34",null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_GONGJI00","0","69","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("옵션");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","86","69",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("chkTY_ISTOP","93","74","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("최상단");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SHOW_FR","252","74","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","193","73","55","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("공지기간");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","363","74","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SHOW_TO","382","74","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtDS_GONGJI","value","dsList","NM_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtDS_CONTENT","value","dsList","RM_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtDS_HNAME","value","dsList","NM_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtDT_INSERT","value","dsList","DT_INSERT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtDT_UPDATE","value","dsList","DT_UPDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtFILE_CNT","value","dsList","FILE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.chkTY_ISTOP","value","dsList","TY_ISTOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctclDT_SHOW_FR","value","dsList","DT_SHOW_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ctclDT_SHOW_TO","value","dsList","DT_SHOW_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCZ_BBS.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.bClose = false;
        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	if(!this.gfnIsNull(this.getOwnerFrame().SN_SEQ)) {
        		this.dsSearch.setColumn(0, "SN_SEQ", this.getOwnerFrame().SN_SEQ);
        		this.FormBtns.Select.click();
        	} else {
        		this.fnAdd();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/

        this.fnSetButton = function() {
        	  this.FormBtns.Select.set_enable(true);
              this.FormBtns.Add.set_enable(true);
              this.FormBtns.Del.set_enable(true);
        	  this.FormBtns.Save.set_enable(true);
        	  this.FormBtns.Excel.set_enable(false);
        	  this.FormBtns.Print.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	 this.btn = this.gfnFormButtonAdd("btnFile", "fnFile");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("SN_SEQ", "bigdecimal");
        	this.dsSelect.addColumn("TY_SEARCH", "string");
        	this.dsSelect.addColumn("DS_SEARCH", "string");
        	this.dsSelect.addColumn("TY_SHOW", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        	this.dsSelect.setColumn(0, "TY_SEARCH", "");
        	this.dsSelect.setColumn(0, "DS_SEARCH", "");
        	this.dsSelect.setColumn(0, "TY_SHOW", "");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *   입력 버튼
         */
        this.fnAdd = function() {
        	this.dsSearch.setColumn(0, "SN_SEQ", "");

        	this.dsList.clearData();
        	this.dsList.addRow();
        	this.dsList.setColumn(0, "ID_USER", 	this.AuthClient.ID_USER);
        	this.dsList.setColumn(0, "NM_USER", 	this.AuthClient.DS_HNAME);
        	this.dsList.setColumn(0, "TY_ISTOP", 	0);
        	this.dsList.setColumn(0, "DT_SHOW_FR", 	this.gfnGetDate());
        	this.dsList.setColumn(0, "DT_SHOW_TO", 	this.gfnGetDate());

        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.btn.set_enable(false);
        }

        /*
        	저장
        */
        this.fnSave = function() {
        	if(this.dsList.rowcount == 0) return;

        	if (this.gfnIsNull(this.dsList.getColumn(0, "NM_TITLE"))) {
        		this.gfnAlert("제목은 반드시 입력하셔야 합니다.");
        		return;
        	}

        	this.dsList.setColumn(0,"TY_SAVE",this.dsList.getRowType(0));
        	this.dsList.setColumn(0,"ID_USER",this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsList";
        	var outData     = "dsList=save";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if(this.dsList.getColumn(0,"FILE_CNT") > 0) {
        		this.gfnAlert("첨부파일이 있습니다! 삭제 후 진행하세요!");
        		return;
        	};

        	this.gfnConfirm("삭제하시겠습니까?","fnDel_callback");
        }

        this.fnClose = function() {
        	this.getParentContext().close(this.bClose);
        };
        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		if(this.dsList.rowcount == 0)
        			this.fnAdd();
        	}
         	else if (svcID == "save") {
        		this.gfnAlert("저장이 완료되었습니다.");

        		this.btn.set_enable(true);
        		this.bClose = true;

        		this.dsSearch.setColumn(0,"SN_SEQ",this.dsList.getColumn(0,"SN_SEQ"));
        		this.fnSelect();
         	}
        	else if (svcID == "delete") {
        		this.gfnAlert("삭제가 되었습니다.", "fnClose_callback");
         	}
        }


        this.fnDel_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsList.setColumn(0,"TY_SAVE", 8);

        		var strSvcId    = "delete";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "save=dsList";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        // 삭제 메시지 후 창을 닫기 위한 콜백함수.
        this.fnClose_callback = function(strID)
        {
        	this.getParentContext().close(true);
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnFile = function(obj,e) {

        	var fileManager = {};

            fileManager.CD_GUBUN = "DC00";
        	fileManager.CD_DIR = [this.dsList.getColumn(0, "SN_SEQ")];
            fileManager.IS_READONLY = false;
            this.gfnFileManager(fileManager, "fnFileCallback");

        };


        this.fnFileCallback = function() {
        	this.fnSelect();
        };


        this.dsList_onvaluechanged = function(obj,e)
        {
         	if(e.oldvalue != e.newvalue) {
        		this.FormBtns.Save.set_enable(true);
         	};
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staDT_CONFIRM.addEventHandler("onclick",this.divData_staTY_APPROVAL_onclick,this);
            this.divData.form.staDT_CONFIRM00.addEventHandler("onclick",this.divData_staTY_APPROVAL_onclick,this);
            this.divData.form.chkTY_ISTOP.addEventHandler("onchanged",this.divData_chkYN_POPUP_onchanged,this);
            this.divData.form.ctclDT_SHOW_FR.addEventHandler("onchanged",this.divData_onchanged,this);
            this.divData.form.ctclDT_SHOW_TO.addEventHandler("onchanged",this.divData_onchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DCZ_BBS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
