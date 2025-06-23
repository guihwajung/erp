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
            this.set_titletext("임대료 일괄수납");
            this.getSetter("maxwidth").set("950");
            this.getSetter("maxheight").set("450");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectInfo</Col><Col id=\"SP\">DLCPR_BATCH_SUNAP_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectList</Col><Col id=\"SP\">DLCPR_BATCH_SUNAPDATA_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLCPR_BATCH_SUNAP_INSERT</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DLCPR_LEASE_SUNAP_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_IN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DELAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_POSITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">M/H</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">은행</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">본사</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_text("임대료 일괄수납");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","32",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("임대료 일괄수납");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","60","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("사업지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","60",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_ACNTUNIT","sta02:5","sta02:-25","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCD_ACNTUNIT","txtDS_ACNTUNIT:5","sta02:-25","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staText","txtDS_ACNTUNIT:25","sta02:-25",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_text("※보증수수료가 포함된금액입니다.");
            obj.set_taborder("0");
            obj.set_color("red");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta02:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("납기내일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta02:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtDT_IN","sta04:5","sta04:-25","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","sta02:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("납기내금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta02:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_IN","sta06:5","sta06:-25","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta02:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("연체료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta02:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DELAY","sta08:5","sta08:-25","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","sta02:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("납기후금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","sta02:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_AFTER","sta10:5","sta10:-25","95","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta04:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("납부계좌");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","sta04:-1","355","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_GUJA","sta12:5","sta12:-25","343","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DLB_CFBANK_ACCOUNT_LEASE_CODEFIND");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","sta13:-3","sta04:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("수납처구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta04:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_POSITION","sta14:5","sta14:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_POSITION");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta16","0","sta12:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("부과년월");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","sta12:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtYM_IMPOSE","sta16:5","sta16:-25","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","sta17:-1","sta12:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("동/호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","sta18:-1","sta12:-1","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","sta18:5","sta18:-27","50","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("4");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_DONG:5","sta18:-27","50","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("3");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDong","ctxtNO_HO:5","sta19:-27","25","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_CF_Search");
            obj.set_tabstop("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta20","sta19:-1","sta12:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("수납일자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21","sta20:-1","sta12:-1","119","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_RECEIPT","sta20:5","sta20:-25","98","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","sta21:-1","sta12:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("수납금액");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23","sta22:-1","sta12:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_RECEIPT","sta22:5","sta22:-25","95","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta26","0","sta23:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("임대료납부내역");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta26:5",null,"180","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnReceipt",null,"35","140","25","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("수납");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnReceiptCancel",null,"184","140","25","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("수납취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item00","divData.form.txtDS_ACNTUNIT","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","divData.form.txtCD_ACNTUNIT","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item01","divData.form.txtDT_IN","value","dsSearch","DT_IN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item02","divData.form.txtAM_IN","value","dsSearch","AM_IN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item03","divData.form.txtAM_DELAY","value","dsSearch","AM_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item04","divData.form.txtAM_AFTER","value","dsSearch","AM_AFTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item05","divData.form.ccfCD_GUJA","value","dsList","CD_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item06","divData.form.cboTY_POSITION","value","dsList","TY_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item07","divData.form.txtYM_IMPOSE","value","dsList","YM_IMPOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item08","divData.form.ctxtNO_DONG","value","dsList","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item09","divData.form.ctxtNO_HO","value","dsList","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctclDT_RECEIPT","value","dsList","DT_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtAM_RECEIPT","value","dsList","AM_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLC_DLGBATCHSUNAP.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsSearch.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        	this.dsList.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        	this.dsList.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        	this.dsList.setColumn(0, "TY_POSITION", "1");

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnSelect();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        	this.ccfCD_GUJA = this.divData.form.ccfCD_GUJA;
        	this.tclDT_RECEIPT = this.divData.form.tclDT_RECEIPT;
        	this.txtAM_RECEIPT = this.divData.form.txtAM_RECEIPT;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLC_DLGBATCHSUNAP");

        	this.ccfCD_GUJA.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("CD_GUJA", "string");
        	this.dsInsert.addColumn("TY_POSITION", "string");
        	this.dsInsert.addColumn("YM_IMPOSE", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("DT_RECEIPT", "string");
        	this.dsInsert.addColumn("AM_RECEIPT", "bigdecimal");
        	this.dsInsert.addColumn("FLAG", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsSelectList = new Dataset();
        	this.dsSelectList.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelectList.addColumn("TY_GUBUN", "string");
        	this.dsSelectList.addColumn("NO_CHASU", "string");
        	this.dsSelectList.addColumn("YM_IMPOSE", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("YM_IMPOSE", "string");
        };

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "YM_IMPOSE", this.dsList.getColumn(0, "YM_IMPOSE"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지정보가 정확하지 않습니다!!");
        		validate = false;
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_DONG")) || this.gfnIsNull(this.dsSearch.getColumn(0, "NO_FLOOR")) || this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HO"))) {
        		this.gfnAlert("동층호정보가 정확하지 않습니다!!");
        		validate = false;
        	}
        	return validate;
        };

        this.fnSaveValidate = function() {
        	var validate = true;
        	var strMsg = "";
        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_GUJA"))) {
        		strMsg += "계좌를 입력하지 않았습니다.\n";
        		validate = false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "YM_IMPOSE"))) {
        		strMsg += "부과년월을 입력하지 않았습니다.\n";
        		validate = false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_DONG"))) {
        		strMsg += "동을 입력하지 않았습니다..\n";
        		validate = false;
        	}
        		else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_HO"))) {
        		strMsg += "호를 입력하지 않았습니다..\n";
        		validate = false;
        	}
        		else if (this.gfnIsNull(this.dsList.getColumn(0, "AM_RECEIPT"))) {
        		strMsg += "수납금액을 입력하지 않았습니다..\n";
        		validate = false;
        	}
        	if (!validate) {
        		this.gfnAlert(strMsg);
        		return false;
        	}
        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		if (this.dsResult.rowcount > 0) {
        			this.flag = this.dsResult.getColumn(0, "FLAG");
        			if(this.flag == "E"){
        				this.gfnConfirm("이미 수납내역이 존재합니다.\n 기존내역을 취소하고 재수납처리를 하시겠습니까? ","fnReceiptCallback");
        				this.fnReceiptCallback = function(strID, val) {
        					if (!val) return;
        					this.flag = "R";
        					this.fnSelectDataReceipt();
        				}
        			}else{
        				this.flag = "X";
        			}
        		}
        		else{
        			this.flag = "X";
        			this.gfnAlert(this.dsList.getColumn(0,"NO_DONG") + "동 "+ this.dsList.getColumn(0,"NO_HO") + "호의 [" + this.dsList.getColumn(0,"NO_HO") +
        			"월분 임대료] 수납처리가 성공적으로 수행되었습니다. ");
        			this.dsList.setColumn(0, "NO_HO", "");
        			this.dsList.setColumn(0, "AM_RECEIPT", "");
        			this.getGridData();
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.getParentContext().close(true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_GUJA") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        		dsUserParam.setColumn(nrow, "YN_OPTION", "N");
        		dsUserParam.setColumn(nrow, "FLG_GUBUN", "B");
        	}
        	return true;
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	if (id == "DLB_CFBANK_ACCOUNT_LEASE_CODEFIND") {
         		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
         		dsUserParam.setColumn(nrow, "YN_OPTION", "N");
         		dsUserParam.setColumn(nrow, "FLG_GUBUN", "B");
         	}
        	return true;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        //수납버튼
        this.divData_btnReceipt_onclick = function(obj,e) {
        	this.fnSelectDataReceipt();
        };

        this.fnSelectDataReceipt = function() {
        	if (!this.fnSaveValidate()) return;
        	this.dsInsert.clearData();
        	this.dsInsert.addRow();
        	this.dsInsert.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsInsert.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsInsert.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsInsert.setColumn(0, "CD_GUJA", this.dsList.getColumn(0, "CD_GUJA"));
        	this.dsInsert.setColumn(0, "TY_POSITION", this.dsList.getColumn(0, "TY_POSITION"));
        	this.dsInsert.setColumn(0, "YM_IMPOSE", this.dsList.getColumn(0, "YM_IMPOSE"));
        	this.dsInsert.setColumn(0, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        	this.dsInsert.setColumn(0, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        	this.dsInsert.setColumn(0, "DT_RECEIPT", this.dsList.getColumn(0, "DT_RECEIPT"));
        	this.dsInsert.setColumn(0, "AM_RECEIPT", this.dsList.getColumn(0, "AM_RECEIPT"));
        	this.dsInsert.setColumn(0, "FLAG", this.dsList.getColumn(0, "FLAG"));
        	this.dsInsert.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
        	var outData     = "dsResult=insert0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }
        //수납취소버튼
        this.divData_btnReceiptCancel_onclick = function(obj,e) {
        	this.fnSaveDataReceiptCancel();
        };

        this.fnSaveDataReceiptCancel = function() {
        	this.gfnConfirm("선택한 수납내역이 취소됩니다. ","fnReceiptCancelCallback");
        };
        this.fnReceiptCancelCallback = function(strID, val) {
        	if (!val) return;
        }


        this.divSearch_divSearchDong_ctxtNO_DONG_onkillfocus = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DS_ACNTUNIT"))) {
        		this.gfnAlert("사업지를 입력해주세요!");
        		return;
        	}
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG = "1";

        	this.gfnFormOpen("DRI", "DRI_DONGHOCONTRACT", "fnPopupCallback", param);
        };

        this.fnPopupCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	if (json.DONG.length > 0) {
        		this.dsList.setColumn(0, "NO_DONG" , json.DONG);
        		this.dsList.setColumn(0, "NO_HO"	 , json.HO);
        	}
        };
        this.getGridData = function(){

        	this.dsSelectList.clearData();
        	this.dsSelectList.addRow();
        	this.dsSelectList.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectList.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectList.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectList.setColumn(0, "YM_IMPOSE", this.dsList.getColumn(0, "YM_IMPOSE"));

        	var strSvcId    = "selectList";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectList=dsSelectList";
        	var outData     = "dsList=selectList0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.cboTY_POSITION.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.ctxtNO_DONG.addEventHandler("onkillfocus",this.divSearch_divSearchDong_ctxtNO_DONG_onkillfocus,this);
            this.divData.form.ctxtNO_DONG.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divData.form.ctxtNO_HO.addEventHandler("onkillfocus",this.divSearch_divSearchDong_ctxtNO_HO_onkillfocus,this);
            this.divData.form.ctxtNO_HO.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divData.form.btnDong.addEventHandler("onclick",this.divSearch_divSearchDong_btnDong_onclick,this);
            this.divData.form.btnReceipt.addEventHandler("onclick",this.divData_btnReceipt_onclick,this);
            this.divData.form.btnReceiptCancel.addEventHandler("onclick",this.divData_btnReceiptCancel_onclick,this);
        };
        this.loadIncludeScript("DLC_DLGBATCHSUNAP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
