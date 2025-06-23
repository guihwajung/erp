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
            this.set_titletext("임대료 일괄 부과");
            this.getSetter("maxwidth").set("470");
            this.getSetter("maxheight").set("400");
            if (Form == this.constructor)
            {
                this._setFormPosition(470,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DRCPR_PAYER_SPECIFICATIN_INFO_PRINT_DW_NEW</Col><Col id=\"TARGET\">report</Col></Row><Row><Col id=\"TARGET\">reportBando</Col><Col id=\"SP\">DRCPR_PAYER_SPECIFICATION_SELECT_BANDO</Col></Row><Row><Col id=\"SP\">DRCPR_PAYER_SPECIFICATION_OPTIONBANDO_SELECT</Col><Col id=\"TARGET\">reportOpt</Col></Row><Row><Col id=\"SP\">DRCPR_PAYER_SPECIFICATION_SELECT_LOANINTEREST_DW</Col><Col id=\"TARGET\">reportLoanInterest</Col></Row><Row><Col id=\"SP\">DRCPR_PAYER_SPECIFICATION_SELECT_LOAN_DW</Col><Col id=\"TARGET\">reportLoan</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">일반</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">실거래신고용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RECEIVED\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","20","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("입금확인서출력");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","0","staTITLE:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("분양금납입내역서를 출력합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","sta10:5","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("사업지코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","sta10:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta00:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("동층호(계약자)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta01:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","140","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("기준일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","140",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","144","230","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCEL","btnOK:30","230","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","sta00:5","sta01:-25","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_RECEIVED","sta08:5","sta09:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_00","0","169","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("종류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03_00","109","169",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoTY_TYPE","115","174","295","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsTY_TYPE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","115","116","40","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_maxlength("4");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","160","116","30","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_maxlength("2");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","195","116","40","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_maxlength("3");
            this.divData.addChild(obj.name, obj);

            obj = new Button("cbtnNO_DONGHO","240","116","25","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_CF_Search");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btn00","345","36","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("btn00");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsList","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsList","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tclDT_RECEIVED","value","dsList","DT_RECEIVED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.crdoTY_TYPE","value","dsList","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctxtNO_DONG","value","dsList","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctxtNO_FLOOR","value","dsList","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctxtNO_HO","value","dsList","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRC_PAYER_SPECIFICATION.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.dsList.setColumn(0, "TY_TYPE", 1);

        };

        /************************************************************************
        * 변수 선언
        ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divData.form.ccfCD_ACNTUNIT;
        	this.ctxtNO_DONG = this.divData.form.ctxtNO_DONG;
        	this.ctxtNO_FLOOR = this.divData.form.ctxtNO_FLOOR;
        	this.ctxtNO_HO = this.divData.form.ctxtNO_HO;
        	this.tclDT_RECEIVED = this.divData.form.tclDT_RECEIVED;
        	this.ccboTY_TYPE = this.divData.form.crdoTY_TYPE;
        };

        /************************************************************************
        * 이벤트 설정
        ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
        * 파라미터 설정
        ************************************************************************/
        this.fnSetParameter = function() {

        	// 일반, 대납, 융자
        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_ACNTUNIT", "string");
        	this.dsReport.addColumn("TY_GUBUN", "string");
        	this.dsReport.addColumn("NO_CHASU", "string");
        	this.dsReport.addColumn("NO_DONG", "string");
        	this.dsReport.addColumn("NO_FLOOR", "string");
        	this.dsReport.addColumn("NO_HO", "string");
        	this.dsReport.addColumn("NO_UNIONMEMBER", "string");
        	this.dsReport.addColumn("DT_RECEIVED", "string");

        	// 분양, 옵션
        	this.dsReportBando = new Dataset();
        	this.dsReportBando.addColumn("CD_ACNTUNIT", "string");
        	this.dsReportBando.addColumn("TY_GUBUN", "string");
        	this.dsReportBando.addColumn("NO_CHASU", "string");
        	this.dsReportBando.addColumn("NO_DONG", "string");
        	this.dsReportBando.addColumn("NO_FLOOR", "string");
        	this.dsReportBando.addColumn("NO_HO", "string");
        	this.dsReportBando.addColumn("NO_UNIONMEMBER", "string");
        	this.dsReportBando.addColumn("DT_RECEIVED", "string");
        	this.dsReportBando.addColumn("NO_JUMIN", "string");

        }

        /************************************************************************
        * 버튼 이벤트
        ************************************************************************/
        // 입금확인서 출력
        this.fnPrint = function(obj,e) {

        	var sCdAcntunit = this.dsList.getColumn(0, "CD_ACNTUNIT");
        	var sDsAcntunit = this.dsList.getColumn(0, "DS_ACNTUNIT");
        	var sCdAcntunitCode = sCdAcntunit.substring(0,6);
        	var sTyGubun = sCdAcntunit.substring(6,7);
        	var sNoChasu = sCdAcntunit.substring(7,9);

        	var sTyType = this.dsList.getColumn(0, "TY_TYPE");
        	var sRptTitle = (sTyType == "2")? "(실거래신고용)" : "";
        	this.dsList.setColumn(0, "DS_TITLE", (" 분 양 금 납 입 내 역 " +  sRptTitle));

        	this.dsReport.clearData();
        	this.dsReport.addRow();

        	this.dsReport.setColumn(0, "CD_ACNTUNIT", sCdAcntunitCode);
        	this.dsReport.setColumn(0, "TY_GUBUN", sTyGubun);
        	this.dsReport.setColumn(0, "NO_CHASU", sNoChasu);
        	this.dsReport.setColumn(0, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        	this.dsReport.setColumn(0, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        	this.dsReport.setColumn(0, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        	this.dsReport.setColumn(0, "NO_UNIONMEMBER", this.dsList.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsReport.setColumn(0, "DT_RECEIVED", this.dsList.getColumn(0, "DT_RECEIVED"));

        	this.dsReportBando.clearData();
        	this.dsReportBando.addRow();

        	this.dsReportBando.setColumn(0, "CD_ACNTUNIT", sCdAcntunitCode);
        	this.dsReportBando.setColumn(0, "TY_GUBUN", sTyGubun);
        	this.dsReportBando.setColumn(0, "NO_CHASU", sNoChasu);
        	this.dsReportBando.setColumn(0, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        	this.dsReportBando.setColumn(0, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        	this.dsReportBando.setColumn(0, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        	this.dsReportBando.setColumn(0, "NO_UNIONMEMBER", this.dsList.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsReportBando.setColumn(0, "DT_RECEIVED", this.dsList.getColumn(0, "DT_RECEIVED"));
        	this.dsReportBando.setColumn(0, "NO_JUMIN", this.dsList.getColumn(0, "NO_JUMIN"));

         	var inProc		= "_dsProc";
         	var inParam 	= "params=dsList";			// 조회SP이외 사용할 정보
        	//var inParam 	= "";						// 필요없는 경우 생략
         	var inData      = "report=dsReport reportBando=dsReportBando reportOpt=dsReportBando reportLoanInterest=dsReport reportLoan=dsReport"
         	var reportpath  = "/dr/drc/DRC_PAYER_SPECIFICATION.ozr";

         	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }

         this.fnSave = function(obj,e) {

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_ACNTUNIT", "string");
        	this.dsReport.addColumn("TY_GUBUN", "string");
        	this.dsReport.addColumn("NO_CHASU", "string");
        	this.dsReport.addColumn("NO_DONG", "string");
        	this.dsReport.addColumn("NO_FLOOR", "string");
        	this.dsReport.addColumn("NO_HO", "string");
        	this.dsReport.addColumn("NO_UNIONMEMBER", "string");
        	this.dsReport.addColumn("DT_RECEIVED", "string");

        	this.dsReport.clearData();
        	this.dsReport.addRow();

        	this.dsReport.setColumn(0, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsReport.setColumn(0, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsReport.setColumn(0, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsReport.setColumn(0, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        	this.dsReport.setColumn(0, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        	this.dsReport.setColumn(0, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        	this.dsReport.setColumn(0, "NO_UNIONMEMBER", "");
        	this.dsReport.setColumn(0, "DT_RECEIVED", this.dsList.getColumn(0, "DT_RECEIVED"));

        	this.dsReport1 = new Dataset();
        	this.dsReport1.addColumn("CD_ACNTUNIT", "string");
        	this.dsReport1.addColumn("TY_GUBUN", "string");
        	this.dsReport1.addColumn("NO_CHASU", "string");
        	this.dsReport1.addColumn("NO_DONG", "string");
        	this.dsReport1.addColumn("NO_FLOOR", "string");
        	this.dsReport1.addColumn("NO_HO", "string");
        	this.dsReport1.addColumn("NO_UNIONMEMBER", "string");
        	this.dsReport1.addColumn("DT_RECEIVED", "string");
        	this.dsReport1.addColumn("NO_JUMIN", "string");

        	this.dsReport1.clearData();
        	this.dsReport1.addRow();

        	this.dsReport1.setColumn(0, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsReport1.setColumn(0, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsReport1.setColumn(0, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsReport1.setColumn(0, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        	this.dsReport1.setColumn(0, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        	this.dsReport1.setColumn(0, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        	this.dsReport1.setColumn(0, "NO_UNIONMEMBER", "");
        	this.dsReport1.setColumn(0, "DT_RECEIVED", this.dsList.getColumn(0, "DT_RECEIVED"));
        	this.dsReport1.setColumn(0, "NO_JUMIN", "");

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReport1";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report=dsReport report1=dsReport1";
        	var reportpath  = "/dr/drc/DRC_PAYER_SPECIFICATION_PLUSOPTION.ozr";

        	trace("dsReport>>>" + this.dsReport.saveXML());
        	trace("dsReport1>>>" + this.dsReport1.saveXML());

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }

        /************************************************************************
        * Validate
        ************************************************************************/
        this.fnSelectValidate = function() {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.setFocus();
        		}
        		this.gfnAlert("사업지코드가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_DONG"))) {
        		this.fnVaidateCallback = function() {
        			this.ctxtNO_DONG.setFocus();
        		}
        		this.gfnAlert("동층호(계약자)가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "DT_RECEIVED"))) {
        		this.fnVaidateCallback = function() {
        			this.tclDT_RECEIVED.setFocus();
        		}
        		this.gfnAlert("기준일자를 입력하지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	return true;
        };

        /************************************************************************
        * 코드파인드 이벤트
        ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id){
        		case "ccfCD_ACNTUNIT" :
        			this.dsList.setColumn(0, "NO_DONG", "");
        			this.dsList.setColumn(0, "NO_FLOOR", "");
        			this.dsList.setColumn(0, "NO_HO", "");
        			break;
        	}
        }

        /************************************************************************
        * 콜백 이벤트
        ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("해당기간의 세대별 임대료가 일괄부과되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
        * 기타 이벤트
        ************************************************************************/
        this.dsList_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		//this.fnYM_IMPOSE_AfterCDTextChanged();
        	}
        };

        this.btnOK_onclick = function(obj,e) {

        	if (!this.fnSelectValidate()) return;

        	//this.fnSave();
        	this.fnPrint();
        };

        this.btnCANCEL_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };

        this.cbtnNO_DONGHO_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업자코드를 입력하세요!", "fnVaidateCallback");
        		return;
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsList.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG = "1";

        	this.gfnFormOpen("DRI", "DRI_DONGHOCONTRACT", "fnVatPopupCallback", param);
        };

        this.fnVatPopupCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	if (json.DONG.length > 0) {
        		this.dsList.setColumn(0, "NO_DONG", json.DONG);
        		this.dsList.setColumn(0, "NO_FLOOR", json.FLOOR);
        		this.dsList.setColumn(0, "NO_HO", json.HO);
        	}
        }

        this.divData_btn00_onclick = function(obj,e)
        {
        		this.dsList.setColumn(0, "CD_ACNTUNIT", "K50100A01");
        		this.dsList.setColumn(0, "DS_ACNTUNIT", "검단AA11BL 트리플에듀");

        		this.dsList.setColumn(0, "NO_DONG", "1101");
        		this.dsList.setColumn(0, "NO_FLOOR", "01");
        		this.dsList.setColumn(0, "NO_HO", "003");
        		this.dsList.setColumn(0, "DT_RECEIVED", "20210614");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCEL.addEventHandler("onclick",this.btnCANCEL_onclick,this);
            this.divData.form.ctxtNO_DONG.addEventHandler("onkillfocus",this.divSearch_ctxtNO_DONG_onkillfocus,this);
            this.divData.form.ctxtNO_DONG.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divData.form.ctxtNO_FLOOR.addEventHandler("onkillfocus",this.divSearch_ctxtNO_FLOOR_onkillfocus,this);
            this.divData.form.ctxtNO_FLOOR.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divData.form.ctxtNO_HO.addEventHandler("onkillfocus",this.divSearch_ctxtNO_HO_onkillfocus,this);
            this.divData.form.ctxtNO_HO.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divData.form.cbtnNO_DONGHO.addEventHandler("onclick",this.cbtnNO_DONGHO_onclick,this);
            this.divData.form.btn00.addEventHandler("onclick",this.divData_btn00_onclick,this);
            this.dsTY_TYPE.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DRC_PAYER_SPECIFICATION.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
