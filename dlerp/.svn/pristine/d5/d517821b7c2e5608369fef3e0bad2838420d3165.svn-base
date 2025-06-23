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
            this.set_titletext("총괄집계현황");
            this.getSetter("maxwidth").set("450");
            this.getSetter("maxheight").set("350");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_STANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SAEDAE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAEDAE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DRCPR_TOTALRECEIPTSUM_PRINT</Col><Col id=\"TARGET\">report</Col></Row><Row><Col id=\"SP\">DRFPR_TOTALRECEIPTSUM_OPT_PRINT</Col><Col id=\"TARGET\">reportOpt</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SEARCH", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">분양</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">옵션1</Col></Row><Row><Col id=\"DS_CODE\">옵션2</Col><Col id=\"CD_CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SAEDAE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">T</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">아파트</Col></Row><Row><Col id=\"CD_CODE\">O</Col><Col id=\"DS_CODE\">오피스텔</Col></Row><Row><Col id=\"CD_CODE\">S</Col><Col id=\"DS_CODE\">상가</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRpt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","20","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("총괄집계현황");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSunapInfo","0","staTITLE:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("총괄집계현황을 출력합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","staSunapInfo:5","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","staSunapInfo:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta00:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta01:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta02:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("분양구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta03:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta04:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("세대구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta05:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","142","237","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","237","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_ACNTUNIT","sta00:5","87","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_STANDARD","sta02:5","sta01:4","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_SEARCH","sta04:5","sta03:4","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsTY_SEARCH");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_SAEDAE","sta06:5","sta05:4","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsTY_SAEDAE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.cfCD_ACNTUNIT.form.CDTextBox","value","dsList","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cfCD_ACNTUNIT.form.DSTextBox","value","dsList","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tclDT_STANDARD","value","dsList","DT_STANDARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cboTY_SEARCH","value","dsList","TY_SEARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.cboTY_SEARCH","text","dsList","DS_SEARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cboTY_SAEDAE","value","dsList","TY_SAEDAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cboTY_SAEDAE","text","dsList","DS_SAEDAE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRC_DLGTOTALRECEIPTSTATUS.xfdl", function() {
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

        	this.dsList.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsList.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        	this.dsList.setColumn(0, "DT_STANDARD", this.gfnGetDate());
        	this.dsList.setColumn(0, "TY_SEARCH", "");
        	this.dsList.setColumn(0, "TY_SAEDAE", "T");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.cfCD_ACNTUNIT = this.divData.form.cfCD_ACNTUNIT;
        	this.tclDT_STANDARD = this.divData.form.tclDT_STANDARD;
        	this.cboTY_SEARCH = this.divData.form.cboTY_SEARCH;
        	this.cboTY_SAEDAE = this.divData.form.cboTY_SAEDAE;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {


        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("CD_ACNTUNIT", "string");
        	this.dsReportParam.addColumn("DS_ACNTUNIT", "string");
        	this.dsReportParam.addColumn("DT_STANDARD", "string");
        	this.dsReportParam.addColumn("TY_SEARCH", "string");
        	this.dsReportParam.addColumn("DS_SEARCH", "string");
        	this.dsReportParam.addColumn("TY_SAEDAE", "string");
        	this.dsReportParam.addColumn("DS_SAEDAE", "string");
        	this.dsReportParam.addColumn("DT_PRINT", "string");

        	this.dsReportOpt = new Dataset();
        	this.dsReportOpt.addColumn("CD_ACNTUNIT", "string");
        	this.dsReportOpt.addColumn("TY_GUBUN", "string");
        	this.dsReportOpt.addColumn("NO_CHASU", "string");
        	this.dsReportOpt.addColumn("DT_STANDARD", "string");
        	this.dsReportOpt.addColumn("TY_SEARCH", "string");

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_ACNTUNIT", "string");
        	this.dsReport.addColumn("TY_GUBUN", "string");
        	this.dsReport.addColumn("NO_CHASU", "string");
        	this.dsReport.addColumn("DT_STANDARD", "string");
        	this.dsReport.addColumn("TY_SAEDAE", "string");

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.cfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드를 입력하지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "DT_STANDARD"))) {
        		this.fnVaidateCallback = function() {
        			this.tclDT_STANDARD.setFocus();
        		}
        		this.gfnAlert("기준일자를 입력하지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id){
        		case "cfCD_ACNTUNIT":
        			break;
        	}
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.btnOK_onclick = function(obj,e) {
        	if (!this.fnSelectValidation()) return;

        	this.fnOpenReport();
        };

        this.btnCANCLE_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };

        this.fnOpenReport = function() {
        	var r1 = this.dsTY_SEARCH.findRow("CD_CODE", this.dsList.getColumn(0, "TY_SEARCH"));
        	var r2 = this.dsTY_SAEDAE.findRow("CD_CODE", this.dsList.getColumn(0, "TY_SAEDAE"));

        	var sCdAcntunit = this.dsList.getColumn(0, "CD_ACNTUNIT");
        	var sDsAcntunit = this.dsList.getColumn(0, "DS_ACNTUNIT");
        	var sDtStandard = this.dsList.getColumn(0, "DT_STANDARD");
        	var sTySearch = this.dsList.getColumn(0, "TY_SEARCH");
        	var sDsSearch = this.dsTY_SEARCH.getColumn(r1, "DS_CODE");
        	var sTySaedae = this.dsList.getColumn(0, "TY_SAEDAE");
        	var sDsSaedae = this.dsTY_SAEDAE.getColumn(r2, "DS_CODE");
        	var sCdAcntunitCode = sCdAcntunit.substring(0,6);
        	var sNoChasu = sCdAcntunit.substring(7,9);
        	var sTyGubun = sCdAcntunit.substring(6,7);

        	var objDs = (!this.gfnIsNull(sTySearch)) ? this.dsReportOpt : this.dsReport;

        	// 파라메터 셋팅
        	this.dsReportParam.clearData();
        	this.dsReportParam.addRow();

        	var sDtStandardTitle = "( " + sDtStandard.substr(0,4)+"." + sDtStandard.substr(4,2) + "." + sDtStandard.substr(6,2) + " 현재 )";
        	var sDtToday = this.gfnGetDate();
        	var sDtPrint = sDtToday.substr(0,4)+"-" + sDtToday.substr(4,2) + "-" + sDtToday.substr(6,2);
        	this.dsReportParam.setColumn(0, "CD_ACNTUNIT",  sCdAcntunit);
        	this.dsReportParam.setColumn(0, "DS_ACNTUNIT",  sDsAcntunit);
        	this.dsReportParam.setColumn(0, "DT_STANDARD" ,  sDtStandardTitle);
        	this.dsReportParam.setColumn(0, "TY_SEARCH" ,  sTySearch);
        	this.dsReportParam.setColumn(0, "DS_SEARCH" ,  sDsSearch);
        	this.dsReportParam.setColumn(0, "TY_SAEDAE" ,  sTySaedae);
        	this.dsReportParam.setColumn(0, "DS_SAEDAE" ,  sDsSaedae);
        	this.dsReportParam.setColumn(0, "DT_PRINT",  sDtPrint);

        	objDs.clearData();
        	objDs.addRow();

        	objDs.setColumn(0, "CD_ACNTUNIT", sCdAcntunitCode);
        	objDs.setColumn(0, "TY_GUBUN", sTyGubun);
        	objDs.setColumn(0, "NO_CHASU", sNoChasu);
        	objDs.setColumn(0, "DT_STANDARD", sDtStandard);


        	// 1:옵션1 / 2 : 옵션2
         	if(!this.gfnIsNull(sTySearch)) {
        		objDs.setColumn(0, "TY_SEARCH", sTySearch);
        	}else{
         		// 분양
        		objDs.setColumn(0, "TY_SAEDAE", sTySaedae);
         	}

        	var strSvcId    = "report";
         	var strSvcType  = "select";
         	var inProc		= "_dsProc";
        	var inData      = "report=dsReport";
        	var inData      = (!this.gfnIsNull(sTySearch)) ? "reportOpt=dsReportOpt" : "report=dsReport";
        	var outData     = (!this.gfnIsNull(sTySearch)) ? "dsListRpt=reportOpt0" : "dsListRpt=report0";
        	var strArg 		= "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
         						callBackFnc); // 통신방법 정의 [생략가능]


         	//var inProc		= "_dsProc";
         	var inParam 	= "params=dsReportParam";						// 조회SP이외 사용할 정보
        	//var inParam 	= "";						// 필요없는 경우 생략
         	//var inData      = (!this.gfnIsNull(sTySearch)) ? "reportOpt=dsReportOpt" : "report=dsReport";
         	var reportpath  = "/dr/drc/DRC_TOTALRECEIPTSUM.ozr";

         	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.tclDT_STANDARD.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DRC_DLGTOTALRECEIPTSTATUS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
