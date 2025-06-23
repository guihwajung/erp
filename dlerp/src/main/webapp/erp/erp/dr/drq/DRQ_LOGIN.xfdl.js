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
            this.set_titletext("분양대금납부조회");
            this.getSetter("maxwidth").set("820");
            this.getSetter("maxheight").set("420");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRBPR_WEB_LOGIN_SITE_SELECT </Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_ACNTUNIT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HOSU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CONTRACTOR\"/><Col id=\"DT_BIRTH\"/><Col id=\"NO_HOSU\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("img00","24","28","158","84",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("url(\'imagerc::ymiji.png\')");
            obj.set_border("5px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","207","47","283","67",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("분양대금 납부조회");
            obj.set_font("normal 700 25pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img01","515","19","211","98",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_image("url(\'imagerc::aptapt.png\')");
            obj.set_border("5px none");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img02","570","307","162","46",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_image("url(\'imagerc::ksbjksbj.png\')");
            obj.set_border("5px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","30","130","180","56",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("입주 아파트 선택");
            obj.set_font("normal 700 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","380","130","180","56",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("계약자 정보 입력");
            obj.set_font("normal 700 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","30","315","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("납부조회/확인");
            obj.set_font("normal 11pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","278","315","312","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("COPYRIGHT(C) 2014 YEMIZI, ALL RIGHTS RESERVED");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","24","247","315","46",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("계약자 정보를 입력하신 후 계약하신 아파트를 선택하세요");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","20","293","735","4",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter00","20","182","735","4",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.addChild(obj.name, obj);

            obj = new Static("staYN_ADD","43","214","55","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("아파트");
            obj.set_textDecoration("none");
            this.addChild(obj.name, obj);

            obj = new Combo("ccboDS_ACNTUNIT","98","212","240","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsDS_ACNTUNIT");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("N");
            obj.set_value("N");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staYN_ADD00","382","203","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이름/생년월일");
            obj.set_textDecoration("none");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDS_CONTRACTOR","480","203","125","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDT_BIRTH","610","203","125","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("staYN_ADD00_00","380","241","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("동호수");
            obj.set_textDecoration("none");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNO_DONG","480","239","125","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNO_HOSU","610","239","125","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtDS_CONTRACTOR","value","dsSearch","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtDT_BIRTH","value","dsSearch","DT_BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtNO_HOSU","value","dsSearch","NO_HOSU");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DRQ_LOGIN.xfdl", function() {
        this.objApp = this.gfnGetApplication();

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

        };

        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

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
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DS_CONTRACTOR", "string");
        	this.dsSelect.addColumn("DT_BIRTH", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_HOSU", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	//if (!this.fnSelectValidation()) return;

        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "DS_CONTRACTOR", this.dsSearch.getColumn(0, "DS_CONTRACTOR"));
        	this.dsSelect.setColumn(0, "DT_BIRTH", this.dsSearch.getColumn(0, "DT_BIRTH"));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_HOSU", this.dsSearch.getColumn(0, "NO_HOSU"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
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

        this.fnAdd = function() {
        }

        this.fnDel = function() {

        }

        this.fnSave = function() {

        }

        this.fnExcel = function() {

        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {

         }


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select") {
        		this.setContractor();
        	}
        }

        this.fnPopCallBack = function(svcID, val) {

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {

        // 		this.gfnSetFormStatus(this);	// 폼상태 초기화
        // 		this.gfnGridClear(this.dxGrid);


        		if(!this.dsSearch.getColumn(0, "DS_CONTRACTOR") == "" && !this.dsSearch.getColumn(0, "DT_BIRTH") == "" && !this.dsSearch.getColumn(0, "NO_DONG") == "" && !this.dsSearch.getColumn(0, "NO_HOSU") == "") {
        			this.fnSelect();
        		}
        	}
        };

        this.setContractor = function() {

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var nrow = this.dsDS_ACNTUNIT.addRow();
        		this.dsDS_ACNTUNIT.setColumn(nrow, "CD_CODE", i);
        		this.dsDS_ACNTUNIT.setColumn(nrow, "DS_CODE", this.dsList.getColumn(i, "DS_ACNTUNIT"));
        		//this.dsDS_ACNTUNIT.setColumn(nrow, "DS_CONTRACTOR", this.dsList.getColumn(i, "DS_ACNTUNIT"));

        	}
        }

        this.btnOK_onclick = function(obj,e)
        {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.DS_CONTRACTOR = this.dsSearch.getColumn(0, "DS_CONTRACTOR");
        	param.DT_BIRTH = this.dsSearch.getColumn(0, "DT_BIRTH");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_HOSU = this.dsSearch.getColumn(0, "NO_HOSU");
        	param.CD_ACNTUNIT = this.dsList.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsList.getColumn(0, "DS_ACNTUNIT");
        	param.TY_GUBUN = this.dsList.getColumn(0, "TY_GUBUN");
        	param.NO_CHASU = this.dsList.getColumn(0, "NO_CHASU");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRQ_CONTRACT", "fnConfirmcallback", param);
        };

        this.fnConfirmcallback = function(svcID, val)
        {
        	//if(val == true) {

        		this.FormBtns.Select.click();
        	//}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divSplitter00.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.ccboDS_ACNTUNIT.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRQ_LOGIN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
