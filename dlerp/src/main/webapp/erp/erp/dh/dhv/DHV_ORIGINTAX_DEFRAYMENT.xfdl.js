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
            this.set_titletext("사업소득지급관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTable", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_ORIGINTAX_DEFRAYMENT_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHVPR_ORIGINTAX_DEFRAYMENT_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_ORIGINTAX_DEFRAYMENT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHVPR_ORIGINTAX_DEFRAYMENT_DELETE</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHVPR_ORIGINTAX_DEFRAYMENT_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHVPR_ORIGINTAX_DEFRAYMENT_CANCELSLIP</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DHVPR_ORIGINTAX_DEFRAYMENT_PRINTLIST</Col></Row><Row><Col id=\"TARGET\">linkCancel</Col><Col id=\"SP\">DHVPR_DOMESTICTAX_SLIP_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BH\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPUTE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPUTE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_DEPT_ACNT\"/><Col id=\"YM_IMPUTE_FROM\"/><Col id=\"YM_IMPUTE_TO\"/><Col id=\"CD_VENDOR\"/><Col id=\"TY_GUBUN\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReportList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReportResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_SELFACNT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_DEPT_SELFACNT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BH","ccfCD_CORP:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("발행부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BH","staCD_DEPT_BH:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_DEPT_BH:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","20","staCD_DEPT_SELFACNT:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_ccboTY_GUBUN_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboTY_GUBUN_innerdataset", obj);
            divSearch_form_ccboTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">지급년월</Col><Col id=\"codecolumn\">2</Col></Row><Row><Col id=\"datacolumn\">귀속년월</Col><Col id=\"codecolumn\">1</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboTY_GUBUN_innerdataset);
            obj.set_text("귀속년월");
            obj.set_value("1");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPUTE_FROM","ccboTY_GUBUN:5","staCD_DEPT_SELFACNT:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_IMPUTE_FROM00","ctclYM_IMPUTE_FROM:0.0","staCD_DEPT_SELFACNT:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPUTE_TO","staYM_IMPUTE_FROM00:0.0","staCD_DEPT_SELFACNT:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfCD_CORP:0","staCD_DEPT_SELFACNT:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("거래처코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","staCD_DEPT_SELFACNT:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SLIP","ccfCD_VENDOR:0.0","staCD_DEPT_SELFACNT:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_SLIP","staCD_SLIP:0.0","staCD_DEPT_SELFACNT:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,"540","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DEP","75","-34","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_DEP");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN","0","objGrid:15","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN1","statxtNO_JUMIN:-1","statxtNO_JUMIN:-30","204","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtNO_JUMIN","statxtNO_JUMIN:5","statxtNO_JUMIN:-25","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtCD_INCOMECLASS","statxtNO_JUMIN:202","statxtNO_JUMIN:-30","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtCD_INCOMECLASS1","statxtNO_JUMIN:296","statxtNO_JUMIN:-30","393","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtCD_INCOMECLASS","statxtNO_JUMIN:302","statxtNO_JUMIN:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtYN_NATION","statxtNO_JUMIN:688","statxtNO_JUMIN:-30","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("외국인여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtYN_NATION1","statxtNO_JUMIN:782","statxtNO_JUMIN:-30","204","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtYN_NATION","statxtNO_JUMIN:788","statxtNO_JUMIN:-25","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtDS_INCOMECLASS","statxtNO_JUMIN:405","statxtNO_JUMIN:-25","276","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE","statxtNO_JUMIN:-95","statxtNO_JUMIN:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE1","statxtNO_JUMIN:-1","statxtNO_JUMIN:-1","690","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtNO_ZIP_CODE","statxtNO_JUMIN:5","statxtNO_JUMIN:4","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtDS_ADDR","statxtNO_JUMIN:203","statxtNO_JUMIN:4","478","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtYN_RESIDENT","statxtNO_JUMIN:688","statxtNO_JUMIN:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("거주여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtYN_RESIDENT1","statxtNO_JUMIN:782","statxtNO_JUMIN:-1","204","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtYN_RESIDENT","statxtNO_JUMIN:788","statxtNO_JUMIN:4","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_BH.form.CDTextBox","value","dsSearch","CD_DEPT_BH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboCD_SYSTEM01","value","dsSearch","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_IMPUTE_FROM.form.TextBox","value","dsSearch","YM_IMPUTE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclYM_IMPUTE_TO.form.TextBox","value","dsSearch","YM_IMPUTE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.txtCD_SLIP","value","dsSearch","CD_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_ORIGINTAX_DEFRAYMENT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.ccfCD_CORP.form.CDTextBox.setFocus();

        	//법인코드 세션에 코드로 셋팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	var toDay = this.gfnGetDate().substring(0,6);
        	this.divSearch.form.ctclYM_IMPUTE_FROM.form.TextBox.set_value(toDay);
        	this.divSearch.form.ctclYM_IMPUTE_TO.form.TextBox.set_value(toDay);

        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        // 		this.ccfCD_DEPT_BH.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        // 		this.ccfCD_DEPT_BH.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.dsSearch.setColumn(0, "CD_DEPT_BH",this.AuthClient.CD_DEPT)
        		this.ccfCD_DEPT_BH.form.fnCodeFindLoad();
        		//this.staCD_DEPT_BH.set_textDecoration("underline");
        	}else {
        		this.dsSearch.setColumn(0, "CD_DEPT_BH", this.AuthClient.LEVCD_DEPT_UPPER);
        		this.ccfCD_DEPT_BH.form.fnCodeFindLoad();
        	}

        	//전역변수에 그리드에 필수체크 배열 담기
        	this.vArrRequired = this.dxGrid.usRequired;

        };

        this.fnSetExtendButton = function() {
        	this.btnSlipLink    	= this.gfnFormButtonAdd("SlipLink", "fnSlipLink"); 				//전표연결
        	this.btnSlipLinkCancel 	= this.gfnFormButtonAdd("SlipLinkCancel", "fnSlipLinkCancel"); 	//전표연결취소
        	this.btnExcelUpload 	= this.gfnFormButtonAdd("ExcelUpload", "fnExcelUpload"); 		//엑셀업로드
        	this.btnSearchSlip  	= this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 			//전표조회 버튼
        	this.btnIssueSlip   	= this.gfnFormButtonAdd("IssueSlip" , "fnIssueSlip"); 			//전표발행 버튼
        	this.btnCancelSlip  	= this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 			//전표취소 버튼

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//조회
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_BH = this.divSearch.form.ccfCD_DEPT_BH;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.txtCD_SLIP = this.divSearch.form.txtCD_SLIP;
        	this.ccboTY_GUBUN = this.divSearch.form.ccboTY_GUBUN;
        	this.ctclYM_IMPUTE_FROM = this.divSearch.form.ctclYM_IMPUTE_FROM;
        	this.ctclYM_IMPUTE_TO = this.divSearch.form.ctclYM_IMPUTE_TO;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.edttxtNO_JUMIN = this.divData.form.edttxtNO_JUMIN;
        	this.edttxtCD_INCOMECLASS = this.divData.form.edttxtCD_INCOMECLASS;
        	this.edttxtDS_INCOMECLASS = this.divData.form.edttxtDS_INCOMECLASS;
        	this.edttxtYN_NATION = this.divData.form.edttxtYN_NATION;
        	this.edttxtNO_ZIP_CODE = this.divData.form.edttxtNO_ZIP_CODE;
        	this.edttxtDS_ADDR = this.divData.form.edttxtDS_ADDR;
        	this.edttxtYN_RESIDENT = this.divData.form.edttxtYN_RESIDENT;

        	this.staCD_DEPT_ACNT = this.divSearch.form.staCD_DEPT_ACNT;
        	this.staCD_DEPT_BH = this.divSearch.form.staCD_DEPT_BH;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;

        	this.vArrRequired = [];
        };

        this.fnSetButton = function() {

        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");			//법인코드
        	this.dsSelect.addColumn("CD_DEPT_BH", "string");		//발행부서
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");		//귀속부서
        	this.dsSelect.addColumn("CD_SLIP", "string");			//전표번호
        	this.dsSelect.addColumn("YM_IMPUTE_FROM", "string");	//귀속년월FROM
        	this.dsSelect.addColumn("YM_IMPUTE_TO", "string");		//귀속년월TO
        	this.dsSelect.addColumn("CD_VENDOR", "string");			//거래처코드
        	this.dsSelect.addColumn("TY_GUBUN", "string");			//귀속년월1 , 지급년월2

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_DEPT_ACNT", "string");		//귀속부서
        	this.dsInsert.addColumn("YM_IMPUTE", "string");			//귀속년월
        	this.dsInsert.addColumn("CD_VENDOR", "string");			//거래처코드
        	this.dsInsert.addColumn("DT_PAYMENTDATE", "string");	//지급일자
        	this.dsInsert.addColumn("AM_PAYMENTAMT", "bigdecimal");	//지급총액
        	this.dsInsert.addColumn("RT_TAXRATE", "bigdecimal");		//세율
        	this.dsInsert.addColumn("AM_INCOMETAX", "bigdecimal");		//소득세
        	this.dsInsert.addColumn("AM_INHERBANTTAX", "bigdecimal");	//주민세
        	this.dsInsert.addColumn("TY_BUSINESSTYPE", "string");	//세율(소득세)
        	this.dsInsert.addColumn("CD_ACCOUNT", "string");		//계정코드
        	this.dsInsert.addColumn("DS_REM", "string");			//적요
        	this.dsInsert.addColumn("DT_ACCOUNT", "string");		//회계일자
        	this.dsInsert.addColumn("ID_USER", "string");			//로그인아이디
        	this.dsInsert.addColumn("NO_JUMIN", "string");			//주민등록번호
        	this.dsInsert.addColumn("DS_NAME", "string");			//성명
        	this.dsInsert.addColumn("DS_ADDR", "string");			//주소
        	this.dsInsert.addColumn("YN_EXCEL", "string");			//엑셀데이터 여부
        	this.dsInsert.addColumn("IDX", "bigdecimal");					//순번
        	this.dsInsert.addColumn("CD_DEPT_BH", "string");		//발행부서
        	this.dsInsert.addColumn("NO_BANKACNT", "string");		//계좌번호
        	this.dsInsert.addColumn("CD_SEMOK", "string");			//세목코드

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");		//귀속부서
        	this.dsUpdate.addColumn("YM_IMPUTE", "string");			//귀속년월
        	this.dsUpdate.addColumn("CD_VENDOR", "string");			//거래처코드
        	this.dsUpdate.addColumn("NO_IDX", "int");				//순번
        	this.dsUpdate.addColumn("DT_PAYMENTDATE", "string");	//지급일자
        	this.dsUpdate.addColumn("AM_PAYMENTAMT", "bigdecimal");	//지급총액
        	this.dsUpdate.addColumn("RT_TAXRATE", "bigdecimal");		//세율
        	this.dsUpdate.addColumn("AM_INCOMETAX", "bigdecimal");		//소득세
        	this.dsUpdate.addColumn("AM_INHERBANTTAX", "bigdecimal");	//주민세
        	this.dsUpdate.addColumn("TY_BUSINESSTYPE", "string");	//세율(소득세)
        	this.dsUpdate.addColumn("CD_ACCOUNT", "string");		//계정코드
        	this.dsUpdate.addColumn("DS_REM", "string");			//적요
        	this.dsUpdate.addColumn("SEQ", "int");					//SEQ
        	this.dsUpdate.addColumn("DT_ACCOUNT", "string");		//회계일자
        	this.dsUpdate.addColumn("NO_JUMIN", "string");			//주민등록번호
        	this.dsUpdate.addColumn("DS_NAME", "string");			//성명
        	this.dsUpdate.addColumn("DS_ADDR", "string");			//주소
        	this.dsUpdate.addColumn("ID_USER", "string");			//로그인아이디
        	this.dsUpdate.addColumn("CD_DEPT_BH", "string");		//발행부서
        	this.dsUpdate.addColumn("NO_BANKACNT", "string");		//계좌번호
        	this.dsUpdate.addColumn("CD_SEMOK", "string");			//세목코드

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_DEPT_ACNT", "string");		//귀속부서
        	this.dsDelete.addColumn("YM_IMPUTE", "string");			//귀속년월
        	this.dsDelete.addColumn("CD_VENDOR", "string");			//거래처코드
        	this.dsDelete.addColumn("NO_IDX", "int");				//순번
        	this.dsDelete.addColumn("SEQ", "int");					//SEQ

        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");			//법인코드
        	this.dsIssueSlip.addColumn("SEQ", "string");				//순번(배열)
        	this.dsIssueSlip.addColumn("ID_TRANS", "string");			//사용자 아이디

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_SLIP", "string");		//전표번호

        	this.dslinkCancel = new Dataset();
        	this.dslinkCancel.addColumn("SEQ", "string");			//SEQ
        	this.dslinkCancel.addColumn("CD_TRADE", "string");		//전표번호
        	this.dslinkCancel.addColumn("DT_ACCOUNT", "string");	//회계일자
        	this.dslinkCancel.addColumn("YN_CONNECT", "string");	//연결여부
        }

        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_ORIGINTAX_DEFRAYMENT");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT_ACNT.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_ACNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT_BH.CodeFindName = "DHX_CFACNTUNIT"; //"DHX_CFACNTUNIT2";
        	this.ccfCD_DEPT_BH.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_BH.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_VENDOR.CodeFindName = "DHX_CFALLVENDOR_CODEFIND";// "DHX_CFVENDOR";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CHK"), "displaytype", "expr:CHK_FLAG =='Y' ? 'checkboxcontrol' : 'none'");	//선택
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CHK"), "edittype", "expr:CHK_FLAG =='Y' ? 'checkbox' : 'none'");

        	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";
        }

        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {

        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "issueSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "cancelSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "selectRpt"){
        // 		this.dsReportResult.appendData(this.dsReportList);
        // 		this.reportCnt --;
        // 		if(this.reportCnt == 0 ){
        // 			this.fnReport();
        // 		}
        		this.fnReport();
        	}else if(svcID == "linkCancel"){
        		if (errorCode == 0) {
        			this.gfnAlert("연결취소 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        }

        this.fnSelectValidation = function() {

        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}
        	//else if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        	else if (this.gfnIsNull(this.ccfCD_DEPT_BH.form.CDTextBox.value)) {
        			this.gfnAlert("발행부서를 입력 하세요.");
        			this.ccfCD_DEPT_BH.form.CDTextBox.setFocus();
        			return false;
        		}
        	//}
        	else if(this.gfnIsNull(this.ctclYM_IMPUTE_FROM.form.TextBox.value) || this.gfnIsNull(this.ctclYM_IMPUTE_TO.form.TextBox.value)) {
        		this.gfnAlert(this.ccboTY_GUBUN.text + "(은)는 반드시 입력 하셔야 합니다.");
        		this.ctclYM_IMPUTE_FROM.setFocus();
        		return false;
        	}

        	if(this.gfnGetDiffDate(this.ctclYM_IMPUTE_FROM.form.TextBox.value + "01", this.ctclYM_IMPUTE_TO.form.TextBox.value + "01") <= -1){
        		this.gfnAlert(this.ccboTY_GUBUN.text + "의 시작일은 종료일보다 작아야 합니다.");
        		this.ctclYM_IMPUTE_FROM.setFocus();
        		return false;
        	}

        	return true;
        }

        //저장시 주민번호 유효성 체크
        this.fnSaveValidation = function ()
        {
        	var colNO_JUMIN = this.dxGrid.getBindCellIndex("body", "NO_JUMIN");
        	var headText   = this.dxGrid.getCellProperty("head" , colNO_JUMIN, "text");
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if((this.dsList.getColumn(i, this.ucFlag) == "I" || this.dsList.getColumn(i, this.ucFlag) == "U") && this.dsList.getColumn(i, "YN_EXCEL") =="Y"){
        			//거래처 구분 : 개인(P), 사업자번호 유효성 체크
        			var noSjc = nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(i, "NO_JUMIN"),"")), "-", "");

        			if(!this.gfnIsNull(noSjc) && !this.gfnIsSSN(noSjc)){
        				this.gfnAlert((i + 1) +"행: ["+headText+"]가 유효하지 않습니다.");
        				this.dsList.set_rowposition(i);
        				this.dxGrid.setCellPos(colNO_JUMIN);
        				return false;
        			}
        		}
        		trace("예산여부:" + this.dsList.getColumn(i, "YN_BUDGET"));
        		trace("예산통제여부:" + this.dsList.getColumn(i, "YN_BUDGET_CTRL_ACNT"));

        		if( (this.dsList.getColumn(i, this.ucFlag) == "I" || this.dsList.getColumn(i, this.ucFlag) == "U")
        			&& this.dsList.getColumn(i, "YN_BUDGET") =="Y" && this.dsList.getColumn(i, "YN_BUDGET_CTRL_ACNT") =="Y" ){
        			//	YN_BUDGET	예산여부 // YN_BUDGET_CTRL_ACNT	예산통제여부
        			if(this.gfnIsNull(this.dsList.getColumn(i, "CD_SEMOK"))){
        				this.gfnAlert((i + 1) +"행: [세목코드] 예산부서일 경우 세목코드는 필수입니다.");
        				return false;
        			}
        		}
        	}

        	return true;
        };

        this.fnAddValidation = function() {

        	return true;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value));
        	this.dsSelect.setColumn(0, "CD_DEPT_BH", this.gfnTrim(this.ccfCD_DEPT_BH.form.CDTextBox.value));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.gfnTrim(this.ccfCD_DEPT_ACNT.form.CDTextBox.value));
        	this.dsSelect.setColumn(0, "CD_SLIP", this.txtCD_SLIP.value);
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.ccboTY_GUBUN.value);
        	this.dsSelect.setColumn(0, "YM_IMPUTE_FROM", this.ctclYM_IMPUTE_FROM.form.TextBox.value);
        	this.dsSelect.setColumn(0, "YM_IMPUTE_TO", this.ctclYM_IMPUTE_TO.form.TextBox.value);
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.gfnTrim(this.ccfCD_VENDOR.form.CDTextBox.value));

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

        this.fnAdd = function() {

        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom");

         	var toDayYyyyMmDd = this.gfnGetDate().substring(0,8);
        //
         	this.dsList.set_enableevent(false);

        	this.dsList.setColumn(nrow, "CD_DEPT_BH", this.AuthClient.CD_DEPT);
        	this.dsList.setColumn(nrow, "DS_DEPT_BH", this.AuthClient.DS_DEPT);
        // 	this.dsList.setColumn(nrow, "CD_DEPT_BH", this.gfnTrim(this.ccfCD_DEPT_BH.form.CDTextBox.value));
        // 	this.dsList.setColumn(nrow, "DS_DEPT_BH", this.gfnTrim(this.ccfCD_DEPT_BH.form.DSTextBox.value));

        // 	this.dsList.setColumn(nrow, "CD_DEPT_ACNT", "");
        // 	this.dsList.setColumn(nrow, "YM_IMPUTE", this.ctclYM_IMPUTE_TO.form.TextBox.value);
        // 	this.dsList.setColumn(nrow, "CD_VENDOR", "");
         	this.dsList.setColumn(nrow, "DT_PAYMENTDATE", toDayYyyyMmDd);
         	this.dsList.setColumn(nrow, "AM_PAYMENTAMT", 0);
         	this.dsList.setColumn(nrow, "RT_TAXRATE", 0);
         	this.dsList.setColumn(nrow, "AM_INCOMETAX", 0);
         	this.dsList.setColumn(nrow, "AM_INHERBANTTAX", 0);
        // 	this.dsList.setColumn(nrow, "CD_BUSINESSTYPE", "");
         	this.dsList.set_enableevent(true);
        }

        this.fnDel = function() {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"))){
        		this.gfnAlert("전표발행된 데이터는 삭제할수없습니다.");
        		return;
        	}

        	this.gfnGridDel(this.dxGrid);
        }

        this.fnSave = function() {

        	//엑셀업로드 데이터일 경우 거래처 코드 필수 제외처리
        	if(this.dsList.findRow("YN_EXCEL", "Y") > -1){
        		var headText = this.dxGrid.getCellProperty("head", this.dxGrid.getBindCellIndex("body", "CD_VENDOR"), "text");
        		this.gfnRemoveAt(this.dxGrid.usRequired, this.gfnIndexInArray(this.dxGrid.usRequired,"CD_VENDOR;"+headText));
        	}else{
        		this.dxGrid.usRequired = this.vArrRequired;
        	}

        	trace("### usRequired :: "+this.dxGrid.usRequired);

        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnSaveValidation()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsertMake(nrow, i);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdateMake(nrow, i);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDeleteMake(nrow, i);
        				break;
        		}
        	}

        	trace(this.dsDelete.saveXML());
        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {
        	trace("fnPrint called");
        	if(this.dsList.findRow("CHK2", "1") == -1){
        		this.gfnAlert("데이터를 선택하세요.(첫번째 체크박스)");
        		return;
        	}

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("SEQ", "string");

        	var idx = 1;
        	this.dsList.filter("CHK2==1");
        	this.reportCnt = this.dsList.rowcount;

        	this.dsReportResult.clearData();
        	this.dsReport.clearData();

        	var seqs = "";
        	for(var i=0 ;i < this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK2") == 1){
        			seqs += this.dsList.getColumn(i, "SEQ");
        		}
        		if(i < this.dsList.rowcount-1){
        		    seqs +=",";
        		}
         	}
        	var nRow = this.dsReport.addRow();
        	this.dsReport.setColumn(nRow, "SEQ"	, seqs);

        	this.dsList.filter("");

        	var strSvcId    = "selectRpt";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "report=dsReport";
        	var outData     = "dsReportList=report0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,
        						false); // 통신방법 정의 [생략가능]
        	return false;
        };

        this.fnReport = function(){

        	var inProc		= "_dsProc";
        	var inParam 	= "params=dsReportList";
        	var inData      = "";
        	var reportpath  = "/dh/dhv/DHV_ORIGINTAX_DEFRAYMENT_RPTLIST.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value);
        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	trace(" LEVCD_DEPT_UPPER=>" + this.AuthClient.LEVCD_DEPT_UPPER);
        	if(id == "ccfCD_DEPT_ACNT" || id == "ccfCD_DEPT_BH" ) {
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			return false;
        		}
        		var ynSlipAccept = (id == "ccfCD_DEPT_BH") ? "" : "Y";
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, ynSlipAccept);						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);


        // 		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "0000000");
        // 		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);
        // 		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        // 		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "");
        	}

        	if(id == "ccfCD_VENDOR") {
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		//dsUserParam.setColumn(nrow, "TY_VENDOR" , "");		//X   CD_VENDOR
        		/*dsUserParam.setColumn(nrow, "VALUE" , "");		//X   CD_VENDOR*/
        		//dsUserParam.setColumn(nrow, "YN_RELATED", "");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	if(id == "ccfCD_CORP") {
        		//this.gfnSetFormStatus(this, "I");
        		this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();

        	}
        	else if(id == "ccfCD_DEPT_ACNT") {
        		/*this.gfnSetFormStatus(this, "I");*/
        	}
        	else if(id == "ccfCD_VENDOR") {
        		//this.gfnSetFormStatus(this, "I");
        	}
        	this.fnSearchInit();
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSetCombo = function(obj,e) {

        };

        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {

        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);

        		// 리스트 테이블 하단 값 초기화
        		this.edttxtNO_JUMIN.set_value("");
        	    this.edttxtCD_INCOMECLASS.set_value("");
        	    this.edttxtDS_INCOMECLASS.set_value("");
        	    this.edttxtYN_NATION.set_value("");
        	    this.edttxtNO_ZIP_CODE.set_value("");
        	    this.edttxtDS_ADDR.set_value("");
        	    this.edttxtYN_RESIDENT.set_value("");
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		// 리스트 테이블 하단 값 초기화
        		this.edttxtNO_JUMIN.set_value("");
        	    this.edttxtCD_INCOMECLASS.set_value("");
        	    this.edttxtDS_INCOMECLASS.set_value("");
        	    this.edttxtYN_NATION.set_value("");
        	    this.edttxtNO_ZIP_CODE.set_value("");
        	    this.edttxtDS_ADDR.set_value("");
        	    this.edttxtYN_RESIDENT.set_value("");
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e) {
           if ((obj.oldrow > -1 && obj.oldrow == e.row) || (obj.oldrow == -1 && e.oldrow != e.row)) {

        		if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        		// 리스트 테이블 하단 값 세팅
        		var no_jumin = this.dsList.getColumn(this.dsList.rowposition, "NO_JUMIN2");
        		var cd_incomeclass = this.dsList.getColumn(this.dsList.rowposition, "CD_BUSINESSTYPE");
        		var ds_incomeclass = this.dsList.getColumn(this.dsList.rowposition, "DS_BUSINESSTYPE");
        		var yn_nation = this.dsList.getColumn(this.dsList.rowposition, "YN_NATION");
        		var no_zip_code = this.dsList.getColumn(this.dsList.rowposition, "NO_ZIP");
        		var ds_addr = this.dsList.getColumn(this.dsList.rowposition, "DS_ADDR2");
        		var yn_resident = this.dsList.getColumn(this.dsList.rowposition, "YN_RESIDENT");

        		this.edttxtNO_JUMIN.set_value(no_jumin);
        		this.edttxtCD_INCOMECLASS.set_value(cd_incomeclass);
        		this.edttxtDS_INCOMECLASS.set_value(ds_incomeclass);
        		this.edttxtYN_NATION.set_value(yn_nation);
        		this.edttxtNO_ZIP_CODE.set_value(no_zip_code);
        		this.edttxtDS_ADDR.set_value(ds_addr);
        		this.edttxtYN_RESIDENT.set_value(yn_resident);

        		obj.oldrow = -1;
        	}
        };

        this.fnGrid_AfterEdit = function(obj,e) {
        	trace("fnGrid_AfterEdit!?" + e.columnid);
        	if(e.columnid == "AM_PAYMENTAMT" || e.columnid == "RT_TAXRATE") {
        		if(e.oldvalue != e.newvalue) {
        			this.dsList.setColumn(e.row, "AM_INCOMETAX", Math.round(this.dsList.getColumn(e.row,"AM_PAYMENTAMT")*this.dsList.getColumn(e.row,"RT_TAXRATE")/100/10)*10);
        			this.dsList.setColumn(e.row, "AM_INHERBANTTAX", Math.round(this.dsList.getColumn(e.row,"AM_PAYMENTAMT")*this.dsList.getColumn(e.row,"RT_TAXRATE")/100/10/10)*10);

        			//지급액 계산
        			this.fnSetAmAmount();
        		}
        	}

        	if(e.columnid == "AM_INCOMETAX" || e.columnid == "AM_INHERBANTTAX") {	//소득세,주민세
        		//지급액 계산
        		this.fnSetAmAmount();
        	}

        	if(e.columnid == "CD_VENDOR"){
        		trace( e.oldvalue + " / " + e.newvalue );
        		if(e.oldvalue != e.newvalue) {
        			this.dsList.setColumn(e.row, "NO_BANKACNT", "");	// 계좌번호
        		}
        	}
        }

        //지급액 계산
        this.fnSetAmAmount = function ()
        {
        	var amPaymentAmt 	 = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition,"AM_PAYMENTAMT"), 0);		//지급총액
        	var amIncontex  	 = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition,"AM_INCOMETAX"), 0);		//소득세
        	var amInherbanttext  = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition,"AM_INHERBANTTAX"), 0);	//주민세

        	this.dsList.setColumn(this.dsList.rowposition, "AM_AMOUNTAMT", (amPaymentAmt-(amIncontex+amInherbanttext)));
        };

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	//var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	var cdCorp = this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value);
        	var cdPay = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	var TyVendor = this.dsList.getColumn(this.dsList.rowposition, "TY_VENDOR");
        	var sYrAcnt = this.dsList.getColumn(this.dsList.rowposition, "DT_ACCOUNT");
        	var cdDept = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT");
        	var cdProject = "DD0001";
        	var cdAccount = this.dsList.getColumn(this.dsList.rowposition, "CD_ACCOUNT");

        	switch(id) {
        		case "DHX_CFACNTUNIT_BH":	// 발행부서명
        		case "DHX_CFACNTUNIT_ACNT":	// 회계단위
        			if (this.gfnIsNull(cdCorp)) {
        				this.gfnAlert("법인코드를 선택하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        			dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        			dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		break;

        		case "DHX_CFVENDOR":	//거래처코드(DHX_CFALLVENDOR_CODEFIND)
        			dsUserParam.setColumn(nrow, "CD_CORP" , cdCorp);
        		break;
        		case "DZX_CFCODE_COM_V07":
        			dsUserParam.setColumn(nrow, "CD_SYSTEM", "DH");
        			dsUserParam.setColumn(nrow, "CD_TYPE", "V07");
        			break;
        		case "DHX_CFACCOUNT":	//계정코드
        			dsUserParam.setColumn(nrow, "YN_SLIP", "Y");
        			dsUserParam.setColumn(nrow, "MIN_VALUE", cdDept);
        // 		dsUserParam.setColumn(nrow, "ACCOUNT1", "443");
        // 		dsUserParam.setColumn(nrow, "ACCOUNT2", "771");
        // 		dsUserParam.setColumn(nrow, "ACCOUNT3", "411");
        // 		dsUserParam.setColumn(nrow, "ACCOUNT4", "");
        // 		dsUserParam.setColumn(nrow, "ACCOUNT5", "");
        // 		dsUserParam.setColumn(nrow, "PARM01"  , "");
        // 		dsUserParam.setColumn(nrow, "PARM02"  , "");
        // 		dsUserParam.setColumn(nrow, "PARM03"  , "");
        // 		dsUserParam.setColumn(nrow, "PARM04"  , "");
        // 		dsUserParam.setColumn(nrow, "PARM05"  , "");
        		break;
        		case "DFX_CFACCOUNTMATCH":	// 계좌번호
        			if(this.gfnIsNull(cdPay)){
        				this.gfnAlert("거래처를 입력해주세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "TY_VENDOR" , TyVendor);
        			dsUserParam.setColumn(nrow, "CD_PAY" , cdPay);
        		break;
        		// 세목코드
        		case "DIX_CFSEMOK_DIVERT":
        			if(this.gfnIsNull(cdDept)) {
        				this.gfnAlert("부서를 선택하세요.");
        				return false;
        			}

        			if(this.gfnIsNull(cdAccount)) {
        				this.gfnAlert("비목을 선택하세요.");
        				return false;
        			}
        			var nStart = cdAccount.length -4;
        			var cdBimok = cdAccount.substr( nStart, 4 );

        			dsUserParam.setColumn(nrow, "YR_ACCOUNT", sYrAcnt.substring(0, 4));
        			dsUserParam.setColumn(nrow, "CD_DEPTOFFICER", cdDept);
        			dsUserParam.setColumn(nrow, "CD_BIMOK", cdBimok);

        		break;
        		case "DHX_CFSEMOK_BY_MULTI":	// 세목	-- 사용안함
        			if (this.gfnIsNull(cdDept)) {
        				this.gfnAlert("귀속부서코드를 먼저 입력하세요.");
        				return false;
        			}

        			if (this.gfnIsNull(cdAccount)) {
        				this.gfnAlert("계정코드를 먼저 입력하세요.");
        				return false;
        			}

        			if (this.gfnIsNull(sYrAcnt)) {
        				//this.gfnAlert("거래시작일자를 먼저 입력하세요.");
        				this.gfnAlert("회계일자를 먼저 입력하세요.");
        				return false;
        			}

        			var nStart = cdAccount.length -4;
        			var cdBimok = cdAccount.substr( nStart, 4 );

        			dsUserParam.setColumn(nrow, "YR_ACCOUNT", sYrAcnt.substring(0, 4));
        			dsUserParam.setColumn(nrow, "CD_DEPTOFFICER", cdDept);
        			dsUserParam.setColumn(nrow, "CD_PROJECT", cdProject);
        			dsUserParam.setColumn(nrow, "CD_BIMOK", cdBimok);
        		break;
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var nRow = this.dsList.rowposition;
        	if(id == "DHX_CFVENDOR") {
        		var arr = codeFindData;

        		if(arr.length > 0) {

        			this.edttxtNO_JUMIN.set_value(arr[0]["NO_JUMIN"]);
        			this.edttxtNO_ZIP_CODE.set_value(arr[0]["NO_ZIP"]);
        			this.edttxtDS_ADDR.set_value(arr[0]["DS_ADDR"]);
        			this.edttxtYN_NATION.set_value(arr[0]["YN_NATION"]);
        			this.edttxtYN_RESIDENT.set_value(arr[0]["YN_RESIDENT"]);

        		} else {
        			this.edttxtNO_JUMIN.set_value("");
        			this.edttxtNO_ZIP_CODE.set_value("");
        			this.edttxtDS_ADDR.set_value("");
        			this.edttxtYN_NATION.set_value("");
        			this.edttxtYN_RESIDENT.set_value("");
        		}
        		this.dsList.setColumn(nRow, "NO_BANKACNT", "");	// 계좌번호
        	}

        	if(id == "CF_CODE_DH_36") {
        		var arr = codeFindData;

        		if(arr.length > 0) {

        			this.edttxtCD_INCOMECLASS.set_value(arr[0]["CD_CODE"]);
        			this.edttxtDS_INCOMECLASS.set_value(arr[0]["DS_CODE"]);

        		} else {
        			this.edttxtCD_INCOMECLASS.set_value("");
        			this.edttxtDS_INCOMECLASS.set_value("");
        		}
        	}

        	return true;
        };

        this.dsInsertMake = function(nrow, i) {
        	this.dsInsert.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        	this.dsInsert.setColumn(nrow, "YM_IMPUTE", this.dsList.getColumn(i, "DT_ACCOUNT").substr(0,6));
        	this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        	this.dsInsert.setColumn(nrow, "DT_PAYMENTDATE", this.dsList.getColumn(i, "DT_PAYMENTDATE"));
        	this.dsInsert.setColumn(nrow, "AM_PAYMENTAMT", this.dsList.getColumn(i, "AM_PAYMENTAMT"));
        	this.dsInsert.setColumn(nrow, "RT_TAXRATE", this.dsList.getColumn(i, "RT_TAXRATE"));
        	this.dsInsert.setColumn(nrow, "AM_INCOMETAX", this.dsList.getColumn(i, "AM_INCOMETAX"));
        	this.dsInsert.setColumn(nrow, "AM_INHERBANTTAX", this.dsList.getColumn(i, "AM_INHERBANTTAX"));
        	this.dsInsert.setColumn(nrow, "TY_BUSINESSTYPE", this.dsList.getColumn(i, "CD_BUSINESSTYPE"));
        	this.dsInsert.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        	this.dsInsert.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        	this.dsInsert.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(i, "DT_ACCOUNT"));
        	this.dsInsert.setColumn(nrow, "NO_JUMIN", this.dsList.getColumn(i, "NO_JUMIN"));
        	this.dsInsert.setColumn(nrow, "DS_NAME", this.dsList.getColumn(i, "DS_NAME"));
        	this.dsInsert.setColumn(nrow, "DS_ADDR", this.dsList.getColumn(i, "DS_ADDR"));
        	this.dsInsert.setColumn(nrow, "YN_EXCEL", this.dsList.getColumn(i, "YN_EXCEL"));
        	this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsInsert.setColumn(nrow, "IDX", i);
        	this.dsInsert.setColumn(nrow, "CD_DEPT_BH", this.dsList.getColumn(i, "CD_DEPT_BH"));
        	this.dsInsert.setColumn(nrow, "NO_BANKACNT", this.dsList.getColumn(i, "NO_BANKACNT"));
        	this.dsInsert.setColumn(nrow, "CD_SEMOK", this.dsList.getColumn(i, "CD_SEMOK"));


        };

        this.dsUpdateMake = function(nrow, i) {

        	this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        	this.dsUpdate.setColumn(nrow, "YM_IMPUTE", this.dsList.getColumn(i, "DT_ACCOUNT").substr(0,6));
        	this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        	this.dsUpdate.setColumn(nrow, "NO_IDX", this.dsList.getColumn(i, "NO_IDX"));
        	this.dsUpdate.setColumn(nrow, "DT_PAYMENTDATE", this.dsList.getColumn(i, "DT_PAYMENTDATE"));
        	this.dsUpdate.setColumn(nrow, "AM_PAYMENTAMT", this.dsList.getColumn(i, "AM_PAYMENTAMT"));
        	this.dsUpdate.setColumn(nrow, "RT_TAXRATE", this.dsList.getColumn(i, "RT_TAXRATE"));
        	this.dsUpdate.setColumn(nrow, "AM_INCOMETAX", this.dsList.getColumn(i, "AM_INCOMETAX"));
        	this.dsUpdate.setColumn(nrow, "AM_INHERBANTTAX", this.dsList.getColumn(i, "AM_INHERBANTTAX"));
        	this.dsUpdate.setColumn(nrow, "TY_BUSINESSTYPE", this.dsList.getColumn(i, "CD_BUSINESSTYPE"));
        	this.dsUpdate.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        	this.dsUpdate.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        	this.dsUpdate.setColumn(nrow, "SEQ", this.dsList.getColumn(i, "SEQ"));
        	this.dsUpdate.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(i, "DT_ACCOUNT"));
        	this.dsUpdate.setColumn(nrow, "NO_JUMIN", this.dsList.getColumn(i, "NO_JUMIN"));
        	this.dsUpdate.setColumn(nrow, "DS_NAME", this.dsList.getColumn(i, "DS_NAME"));
        	this.dsUpdate.setColumn(nrow, "DS_ADDR", this.dsList.getColumn(i, "DS_ADDR"));
        	this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsUpdate.setColumn(nrow, "CD_DEPT_BH", this.dsList.getColumn(i, "CD_DEPT_BH"));
        	this.dsUpdate.setColumn(nrow, "NO_BANKACNT", this.dsList.getColumn(i, "NO_BANKACNT"));
        	this.dsUpdate.setColumn(nrow, "CD_SEMOK", this.dsList.getColumn(i, "CD_SEMOK"));

        };

        this.dsDeleteMake = function(nrow, i) {
        	this.dsDelete.setColumn(nrow, "SEQ", this.dsList.getColumn(i, "SEQ"));
        // 	this.dsDelete.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        // 	this.dsDelete.setColumn(nrow, "YM_IMPUTE", this.dsList.getColumn(i, "DT_ACCOUNT").substr(0,6));
        // 	this.dsDelete.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        // 	this.dsDelete.setColumn(nrow, "NO_IDX", this.dsList.getColumn(i, "NO_IDX"));
        };

        this.fnExcelUpload = function(obj,e) {
        	var cdCorp = this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value);
        	if(this.gfnIsNull(cdCorp)){
        		this.gfnAlert("법인코드를 먼저 선택하세요.");
        		return;
        	}

        	this.dsList.clearData();
           	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_ORIGINTAX_DEFRAYMENT");

        	// this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	// sheet명 없으면 첫번째 sheet
        	this.gfnExcelImport("dsList","sheet1","A2","fnExcelImportCallback","import",this);

        };

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다.");
        		return false;
        	}

        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;

        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	//this.dsList.set_enableevent(false);
        	for (var i=0; i< dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		//아래 copyRow가 컬럼변경 이벤트를 실행하지 않음. 코드파인더 실행때문에 이 위치로 이동
        		this.dsList.setColumn(nrow, "CD_DEPT_BH"		, this.gfnNvl(dsOut.getColumn(i,"CD_DEPT_BH"),""));		//발행부서
        		this.dsList.setColumn(nrow, "CD_DEPT_ACNT"		, this.gfnNvl(dsOut.getColumn(i,"CD_DEPT_ACNT"),""));	//회계단위
        		this.dsList.setColumn(nrow, "CD_VENDOR"			, this.gfnNvl(dsOut.getColumn(i,"CD_VENDOR"),""));		//거래처코드
        		this.dsList.setColumn(nrow, "CD_BUSINESSTYPE"	, this.gfnNvl(dsOut.getColumn(i,"CD_BUSINESSTYPE"),""));//업종코드
        		this.dsList.setColumn(nrow, "CD_ACCOUNT"		, this.gfnNvl(dsOut.getColumn(i,"CD_ACCOUNT"),""));		//계정코드

        		// 양식이 일치하는 경우 copyRow
        		this.dsList.copyRow(nrow, dsOut, i);

        		this.dsList.setColumn(nrow, "CHK"			, "0");
        		this.dsList.setColumn(nrow, "CHK2"			, "0");
        		this.dsList.setColumn(nrow, "DT_ACCOUNT"	, nexacro.replaceAll(this.gfnNvl(dsOut.getColumn(i,"DT_ACCOUNT"),""),/[^0-9]/g, ""));
         		this.dsList.setColumn(nrow, "DT_PAYMENTDATE", nexacro.replaceAll(this.gfnNvl(dsOut.getColumn(i,"DT_PAYMENTDATE"),""),/[^0-9]/g, ""));
         		this.dsList.setColumn(nrow, "NO_JUMIN"		, nexacro.replaceAll(this.gfnNvl(dsOut.getColumn(i,"NO_JUMIN"),""),/[^0-9]/g, ""));
         		this.dsList.setColumn(nrow, "CD_SLIP"		, nexacro.replaceAll(this.gfnNvl(dsOut.getColumn(i,"CD_SLIP"),""),/[^0-9]/g, ""));
        		this.dsList.setColumn(nrow, "YN_EXCEL"		, "Y");
        		this.dsList.setColumn(nrow, "CHK_FLAG"		, "N");
        		this.dsList.setColumn(nrow, "YN_CONNECT"	, "N");

        	}
        	//this.dsList.set_enableevent(true);
        /*
        	for (var i=0; i<dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		for (var j=0; j< dsOut.colcount; j++) {
        			if (!this.gfnIsNull(dsOut.getColumn(i,j)) ){
        				dsOut.setColumn(i,j,nexacro.trim(dsOut.getColumn(i,j)));
        				var strColID = dsOut.getColID( j );
        				//날짜 형식 수정
        				if ( strColID == "Column18" || strColID == "Column20"){
        					dsOut.setColumn(i,j,dsOut.getColumn(i,j).replace(/[^0-9]/g,''));
        				}
        			}
        		}

        		// 양식이 일치하는 경우 copyRow
        		//this.dsList.copyRow(nrow, dsOut, i);

        		// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
        		this.dsList.setColumn(nrow, "CHK2", dsOut.getColumn(i, "Column1"));
        		this.dsList.setColumn(nrow, "CHK", dsOut.getColumn(i, "Column2"));
        		this.dsList.setColumn(nrow, "CD_DEPT_SELFACNT", dsOut.getColumn(i, "Column3"));
        		this.dsList.setColumn(nrow, "DS_DEPT_SELFACNT", dsOut.getColumn(i, "Column4"));
        		this.dsList.setColumn(nrow, "CD_DEPT_ACNT", dsOut.getColumn(i, "Column5"));
        		this.dsList.setColumn(nrow, "DS_DEPT_ACNT", dsOut.getColumn(i, "Column6"));
        		this.dsList.setColumn(nrow, "CD_VENDOR", dsOut.getColumn(i, "Column7"));
        		this.dsList.setColumn(nrow, "DS_VENDOR", dsOut.getColumn(i, "Column8"));
        		this.dsList.setColumn(nrow, "NO_ZIP", dsOut.getColumn(i, "Column9"));
        		this.dsList.setColumn(nrow, "DS_ADDR", dsOut.getColumn(i, "Column10"));
        		this.dsList.setColumn(nrow, "YN_RESIDENT", dsOut.getColumn(i, "Column11"));
        		this.dsList.setColumn(nrow, "YN_NATION", dsOut.getColumn(i, "Column12"));
        		this.dsList.setColumn(nrow, "NO_JUMIN", dsOut.getColumn(i, "Column13"));
        		this.dsList.setColumn(nrow, "CD_BUSINESSTYPE", dsOut.getColumn(i, "Column14"));
        		this.dsList.setColumn(nrow, "DS_BUSINESSTYPE", dsOut.getColumn(i, "Column15"));
        		this.dsList.setColumn(nrow, "CD_ACCOUNT", dsOut.getColumn(i, "Column16"));
        		this.dsList.setColumn(nrow, "DS_ACCOUNT", dsOut.getColumn(i, "Column17"));
        		this.dsList.setColumn(nrow, "DT_ACCOUNT", nexacro.replaceAll(this.gfnNvl(dsOut.getColumn(i, "Column18"),""),"-",""));
        		this.dsList.setColumn(nrow, "NO_IDX", dsOut.getColumn(i, "Column19"));
        		this.dsList.setColumn(nrow, "DT_PAYMENTDATE", nexacro.replaceAll(this.gfnNvl(dsOut.getColumn(i, "Column20"),""),"-",""));
        		this.dsList.setColumn(nrow, "AM_PAYMENTAMT", dsOut.getColumn(i, "Column21"));
        		this.dsList.setColumn(nrow, "RT_TAXRATE", dsOut.getColumn(i, "Column22"));
        		this.dsList.setColumn(nrow, "AM_INCOMETAX", dsOut.getColumn(i, "Column23"));
        		this.dsList.setColumn(nrow, "AM_INHERBANTTAX", dsOut.getColumn(i, "Column24"));
        		this.dsList.setColumn(nrow, "CD_TRADE", dsOut.getColumn(i, "Column25"));
        		//this.dsList.setColumn(nrow, "SEQ", dsOut.getColumn(i, "Column26"));
        		this.dsList.setColumn(nrow, "DS_REM", dsOut.getColumn(i, "Column26"));
        		this.dsList.setColumn(nrow, "NO_JUMIN", nexacro.replaceAll(this.gfnNvl(dsOut.getColumn(i, "Column27"),""),"-",""));
        		this.dsList.setColumn(nrow, "DS_NAME", dsOut.getColumn(i, "Column28"));
        		this.dsList.setColumn(nrow, "DS_ADDR", dsOut.getColumn(i, "Column29"));
        		this.dsList.setColumn(nrow, "CD_SLIP", nexacro.replaceAll(this.gfnNvl(dsOut.getColumn(i, "Column30"),""),"-",""));
        		this.dsList.setColumn(nrow, "YN_EXCEL", "Y");
        		this.dsList.setColumn(nrow, "CHK_FLAG", "N");

        	}
        */
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CHK"), "displaytype", "expr:CHK_FLAG =='Y' ? 'checkboxcontrol' : 'none'");	//선택
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CHK"), "edittype", "expr:CHK_FLAG =='Y' ? 'checkbox' : 'none'");

        	this.gfnSetFormStatus(this, "I");
        };


        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	var cdCorp = this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value);
        	if(this.gfnIsNull(cdCorp)){
        		this.gfnAlert("법인코드를 먼저 선택하세요.");
        		return;
        	}

        	if(this.dsList.findRow("CHK2", "1") == -1){
        		this.gfnAlert("데이터를 선택하세요.(첫번째 체크박스)");
        		return;
        	}

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) != '#' && this.dsList.getColumn(i, "CHK2") == 1){
        			trace("전표번호"+this.dsList.getColumn(i, "CD_SLIP"));
        			if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_SLIP"))){
        				this.gfnAlert("전표발행된 데이터가 선택되어있습니다.");
        				return;
        			}
        		}
        	}

        	var chkSave = false;
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK2") == "1"){
        			if(this.gfnGetFlag(this.dsList, i) == "U"){
        				chkSave = true;
        			}
        		}
        	}

        	if(chkSave){	//데이터 수정 체크
        		this.gfnAlert("저장하지 않은 데이터가 존재합니다.저장 후 발행해 주세요.");
        		return;
        	}

        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");

        };

        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();

        		var arrSeqNo = "";
        		for(var r = 0; r < this.dsList.rowcount; r++) {
        			if(this.dsList.getColumn(r, "CHK2") == 1){
        				arrSeqNo += this.dsList.getColumn(r, "SEQ")+",";
        			}
        		}

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"	, this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "SEQ" 	  	, arrSeqNo.substr(0,arrSeqNo.length-1));
        		this.dsIssueSlip.setColumn(nRow, "ID_TRANS" , this.AuthClient.ID_USER);

        		var strSvcId    = "issueSlip";
        		var strSvcType  = "savesel";
        		var inProc		= "_dsProc";
        		var inData      = "issueSlip=dsIssueSlip";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        //전표취소 처리
        this.fnCancelSlip = function (obj,e)
        {
        	if(this.dsList.findRow("CHK2", "1") == -1){
        		this.gfnAlert("데이터를 선택하세요.(첫번째 체크박스)");
        		return;
        	}

        	var chkSave = false;
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK2") == "1"){
        			if(this.gfnGetFlag(this.dsList, i) == "U"){
        				chkSave = true;
        			}
        		}
        	}

        	if(chkSave){	//데이터 수정 체크
        		this.gfnAlert("저장하지 않은 데이터가 존재합니다.저장 후 실행해주세요.");
        		return;
        	}


        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) != '#' && this.dsList.getColumn(i, "CHK2") == 1){
        			if(this.gfnIsNull(nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(i, "CD_SLIP"),"")),"-",""))){
        				this.gfnAlert("전표번호가 없는 데이터가 선택되어있습니다.");
        				return;
        			}
        		}
        	}

        // 	if(this.gfnIsNull(nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"),"")),"-",""))){
        // 		this.gfnAlert("전표번호는 필수입니다.");
        // 		return;
        // 	}

        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");

        };

        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();

        		//var cdSlip = this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP");
        		var arrCdSlip = "";
        		for(var r = 0; r < this.dsList.rowcount; r++) {
        			if(this.dsList.getColumn(r, "CHK2") == 1){
        				arrCdSlip += this.dsList.getColumn(r, "CD_SLIP")+",";
        			}
        		}

        		//처리할 데이터 담기
        		//this.dsCancelSlip.setColumn(nRow, "CD_SLIP"  , cdSlip);
        		this.dsCancelSlip.setColumn(nRow, "CD_SLIP"  , arrCdSlip);

        		var strSvcId    = "cancelSlip";
        		var strSvcType  = "savesel";
        		var inProc		= "_dsProc";
        		var inData      = "cancelSlip=dsCancelSlip";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        //전표 조회
        this.fnSearchSlip = function (obj,e)
        {
        	if(this.gfnIsNull(nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"),"")),"-",""))){
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP")).substr(0,14);
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        //전표연결
        this.fnSlipLink = function (obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.findRow("CHK", "1") == -1){
        		this.gfnAlert("데이터를 선택하세요.(두번째 체크박스)");
        		return;
        	}

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) != '#' && this.dsList.getColumn(i, "CHK") == 1){
        			if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_SLIP"))){
        				this.gfnAlert("이미 전표발행된 데이터가 선택되어있습니다.");
        				return;
        			}
        		}
        	}

        //
        // 	if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"))){
        // 		this.gfnAlert("이미 전표발행된 데이터입니다");
        // 		return;
        // 	}

        	//소득자 지급정보
        	var seq = "";
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, this.ucFlag) != "#"){
        			if(this.dsList.getColumn(i, "CHK") == 1){
        				seq +=this.dsList.getColumn(i, "SEQ")+",";
        			}
        		}
        	}

        	var param = {};
        	param.CD_CORP  = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP  = this.ccfCD_CORP.form.DSTextBox.value;
        	param.CD_ACNT  = "2101903";
        	param.SEQ      = seq.substr(0,seq.length-1);

        	var sPopupCallBack = "fnSlipLinkPopupCallback";

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DHV_ORIGINTAX_DEFRAYMENTDLG", sPopupCallBack, param, 1000, 500);

        };

        //전표연결 팝업 콜백
        this.fnSlipLinkPopupCallback = function(svcID, val) {
        	if(!this.gfnIsNull(val)) {
        		this.FormBtns.Select.click();
        	}
        };

        //전표연결 취소
        this.fnSlipLinkCancel = function (obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.findRow("CHK", "1") == -1){
        		this.gfnAlert("데이터를 선택하세요.(두번째 체크박스)");
        		return;
        	}

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) != '#' && this.dsList.getColumn(i, "CHK") == 1){
        			if(this.dsList.getColumn(i, "YN_CONNECT") != "연결"){
        				this.gfnAlert("이미 연결취소된 데이터가 선택되어있습니다.");
        				return;
        			}
        		}
        	}
        // 	if(this.dsList.getColumn(this.dsList.rowposition, "YN_CONNECT") != "연결"){
        // 		this.gfnAlert("이미 연결취소된 데이터입니다.");
        // 		return;
        // 	}

        	this.gfnConfirm("연결을 취소하시겠습니까?", "fnSlipLinkCancel_callback");
        };


        this.fnSlipLinkCancel_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dslinkCancel.clearData();
        		var nRow = this.dslinkCancel.addRow();

        		//소득자 지급정보
        		var seq = "";
        		var cdTrade = "";
        		for(var i=0;i<this.dsList.rowcount;i++){
        			if(this.dsList.getColumn(i, this.ucFlag) != "#"){
        				if(this.dsList.getColumn(i, "CHK") == 1){
        					seq +=this.dsList.getColumn(i, "SEQ")+",";
        					cdTrade+=this.dsList.getColumn(i, "CD_SLIP")+",";
        				}
        			}
        		}

        		//처리할 데이터 담기
        		//this.dslinkCancel.setColumn(nRow, "SEQ"  	    , this.dsList.getColumn(this.dsList.rowposition, "SEQ"));
        		this.dslinkCancel.setColumn(nRow, "SEQ"  	    , seq);
        		//this.dslinkCancel.setColumn(nRow, "CD_TRADE"    , this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"));
        		this.dslinkCancel.setColumn(nRow, "CD_TRADE"    , cdTrade);
        		this.dslinkCancel.setColumn(nRow, "DT_ACCOUNT"  , "");
        		this.dslinkCancel.setColumn(nRow, "YN_CONNECT"  , "N");

        		var strSvcId    = "linkCancel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "linkCancel=dslinkCancel";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        this.fnGrid_AfterAllCheck = function(obj, cell, check) {
        	var objDs = obj.getBindDataset();
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	if(colnm == "CHK") {
        		objDs.set_enableevent(false);

        		for(var i =0;i<objDs.getRowCountNF();i++){
        			if(objDs.getColumnNF(i, this.ucFlag) != "#"){
        				if(objDs.getColumnNF(i, "CHK_FLAG") == "Y"){	//변경여부가 Y인 데이터만 처리
        					objDs.setColumn(i, colnm, check);
        				}else{
        					objDs.setColumn(i, colnm, "0");
        				}
        			}
        		}
        		objDs.set_enableevent(true);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_DEPT_BH.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_DEPT_ACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccboTY_GUBUN.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.staYM_IMPUTE_FROM00.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_VENDOR.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncellclick",this.fnCellClick,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_ORIGINTAX_DEFRAYMENT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
