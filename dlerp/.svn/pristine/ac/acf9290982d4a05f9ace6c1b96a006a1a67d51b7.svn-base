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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COMBO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TOTAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_AVG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BUTTON\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TEMP1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TEMP2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TEMP3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TEMP4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_DEV_BASIC2_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DZZPR_DEV_BASIC2_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_SEQ\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_COMBO", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Yes</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">No</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","10","10","50","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("NO_SEQ");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SEQ","staCD_SYSTEM:10","10","120","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0","32","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","32","548","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","sta01:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("키인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta00:-1","sta02:-1","548","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta00:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta03:-1","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","sta03:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta03:-1","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta04:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta05:-1","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","sta06:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("비율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","sta07:-1","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta08:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","sta09:-1","548","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","0","sta12:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("DS_TEMP1");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta13:-1","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta16","sta15:-1","sta13:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("DS_TEMP2");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","422","sta13:-1","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","0","sta14:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("DS_TEMP3");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","sta18:-1","sta15:-1","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta20","sta19:-1","sta16:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("DS_TEMP4");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21","sta20:-1","sta17:-1","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","0","sta18:-1","100","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23","sta22:-1","sta19:-1","548","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta24","0","0","82.97%","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_TEXT","sta00:5","sta03:-25","207","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_CHECK","sta04:5","sta05:-25","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("체크");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_COMBO","sta06:5","sta07:-25","207","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_innerdataset("dsCD_COMBO");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TOTAL","sta08:5","sta09:-25","207","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_AVG","sta10:5","sta11:-25","207","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_format("#,##0.00");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_DATE","sta12:5","sta13:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_TEMP1","sta14:5","sta15:-25","207","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_TEMP2","sta16:5","sta17:-25","207","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_TEMP3","sta18:5","sta19:-25","207","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_TEMP4","sta20:5","sta21:-25","207","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtRM_BIGO","sta22:5","sta23:-75","530","68",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_CODE","105","37","314","20",null,null,null,"604",null,null,this.divData.form);
            obj.set_taborder("36");
            obj.getSetter("CodeFindName").set("DZX_CFDEPT_ORG");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtNO_SEQ","value","dsSearch","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtDS_TEXT","value","dsList","DS_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.chkYN_CHECK","value","dsList","YN_CHECK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cboCD_COMBO","value","dsList","CD_COMBO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtAM_TOTAL","value","dsList","AM_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtRT_AVG","value","dsList","RT_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tclDT_DATE","value","dsList","DT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtDS_TEMP1","value","dsList","DS_TEMP1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtDS_TEMP2","value","dsList","DS_TEMP2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtDS_TEMP3","value","dsList","DS_TEMP3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.txtDS_TEMP4","value","dsList","DS_TEMP4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.txtRM_BIGO","value","dsList","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cfCD_CODE.form.CDTextBox","value","dsList","CD_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.cfCD_CODE.form.DSTextBox","value","dsList","DS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZZ_DEV_BASIC2.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "NO_SEQ"))) {
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
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
        	this.cfCD_CODE = this.divData.form.cfCD_CODE;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_CODE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_SEQ", "int");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_SEQ", "int");
        	this.dsUpdate.addColumn("CD_CODE", "string");
        	this.dsUpdate.addColumn("DS_CODE", "string");
        	this.dsUpdate.addColumn("DS_TEXT", "string");
        	this.dsUpdate.addColumn("YN_CHECK", "string");
        	this.dsUpdate.addColumn("CD_COMBO", "string");
        	this.dsUpdate.addColumn("AM_TOTAL", "bigdecimal");
        	this.dsUpdate.addColumn("RT_AVG", "bigdecimal");
        	this.dsUpdate.addColumn("DT_DATE", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("DS_BUTTON", "string");
        	this.dsUpdate.addColumn("DS_TEMP1", "string");
        	this.dsUpdate.addColumn("DS_TEMP2", "string");
        	this.dsUpdate.addColumn("DS_TEMP3", "string");
        	this.dsUpdate.addColumn("DS_TEMP4", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));

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
         *	입력 버튼
         */
        this.fnAdd = function() {
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;

        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        	this.dsUpdate.setColumn(nrow, "CD_CODE", this.dsList.getColumn(0, "CD_CODE"));
        	this.dsUpdate.setColumn(nrow, "DS_CODE", this.dsList.getColumn(0, "DS_CODE"));
        	this.dsUpdate.setColumn(nrow, "DS_TEXT", this.dsList.getColumn(0, "DS_TEXT"));
        	this.dsUpdate.setColumn(nrow, "YN_CHECK", this.dsList.getColumn(0, "YN_CHECK"));
        	this.dsUpdate.setColumn(nrow, "CD_COMBO", this.dsList.getColumn(0, "CD_COMBO"));
        	this.dsUpdate.setColumn(nrow, "AM_TOTAL", this.dsList.getColumn(0, "AM_TOTAL"));
        	this.dsUpdate.setColumn(nrow, "RT_AVG", this.dsList.getColumn(0, "RT_AVG"));
        	this.dsUpdate.setColumn(nrow, "DT_DATE", this.dsList.getColumn(0, "DT_DATE"));
        	this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(0, "RM_BIGO"));
        	this.dsUpdate.setColumn(nrow, "DS_BUTTON", this.dsList.getColumn(0, "DS_BUTTON"));
        	this.dsUpdate.setColumn(nrow, "DS_TEMP1", this.dsList.getColumn(0, "DS_TEMP1"));
        	this.dsUpdate.setColumn(nrow, "DS_TEMP2", this.dsList.getColumn(0, "DS_TEMP2"));
        	this.dsUpdate.setColumn(nrow, "DS_TEMP3", this.dsList.getColumn(0, "DS_TEMP3"));
        	this.dsUpdate.setColumn(nrow, "DS_TEMP4", this.dsList.getColumn(0, "DS_TEMP4"));
        	this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
        	var outData     = "";
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
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
        	return validate;
        };

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var validate = true;
        	var strMsg = "";

        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_CODE"))) {
        		strMsg += "현장코드는 반드시 입력 하셔야 합니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_DATE"))) {
        		strMsg += "일자는 반드시 입력 하셔야 합니다.\n";
        		validate = false;
        	}

        	if (!validate) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfCD_CODE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", "");
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.dsList.clearData();
        	}
        };


        this.dsList_onvaluechanged = function(obj,e)
        {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");
        	}
        };

        this.divData_sta02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctxtNO_SEQ.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsCD_COMBO.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZZ_DEV_BASIC2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
