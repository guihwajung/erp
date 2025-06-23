(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DRB_TOTALSTATUS");
            this.set_titletext("각종계약자관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DRBPR_BANKSUBMIT_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DRDPR_IPJULIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DRBPR_SENDADDRESS_SELECT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DRBPR_AGREEMENTLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DRBPR_AGREEMENTCHASU_SELECT</Col></Row><Row><Col id=\"TARGET\">select6</Col><Col id=\"SP\">DRBPR_MI_AGREEMENTLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select7</Col><Col id=\"SP\">DRBPR_JOINT_CONTRACTLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select8</Col><Col id=\"SP\">DRBPR_CONTRACTLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select9</Col><Col id=\"SP\">DRBPR_PERIODCONTRACTLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select10</Col><Col id=\"SP\">DRBPR_MI_CONTRACTLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select11</Col><Col id=\"SP\">DRBPR_TOTALAGREEMENT_SELECT</Col></Row><Row><Col id=\"TARGET\">select12</Col><Col id=\"SP\">DRBPR_CONTRACTPAPER_SELECT</Col></Row><Row><Col id=\"TARGET\">select13</Col><Col id=\"SP\">DRBPR_DAILYCONTRACTLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select14</Col><Col id=\"SP\">DRBPR_DAILYRECEIPT_SELECT</Col></Row><Row><Col id=\"TARGET\">select15</Col><Col id=\"SP\">DRBPR_PERIODRECEIPT_SELECT</Col></Row><Row><Col id=\"TARGET\">select16</Col><Col id=\"SP\">DRAPR_SIZESTAUS_SELECT</Col></Row><Row><Col id=\"TARGET\">select17</Col><Col id=\"SP\">DRBPR_TRADE_SELECT</Col></Row><Row><Col id=\"TARGET\">select18</Col><Col id=\"SP\">DRBPR_SUNNAP_SELECT</Col></Row><Row><Col id=\"TARGET\">select19</Col><Col id=\"SP\">DRBPR_CONTACTOR_BUSINESS_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_KIJUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SEARCH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"TY_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dstTyGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1.은행제출용자료</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">2.입주예정자명단통보서-주택도시보증</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">3.계약자 주소록 – 발송주소</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">4.개인별약정현황-분양분</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">5.계약자회차별약정현황</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"VALUE\">6.개인별약정현황-미분양분</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"VALUE\">7.계약자별공동명의자현황</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"VALUE\">8.계약대장(현재기준)</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"VALUE\">9.계약기간별 계약자현황</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"VALUE\">10.미계약대장(기준일기준)</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"VALUE\">11.전체분양금약정 현황(개인약정)</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"VALUE\">12.공급계약서관리대장</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"VALUE\">13.일자별 계약 현황</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"VALUE\">14.일일입금정산현황</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"VALUE\">15.기간별입금정산현황</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"VALUE\">16.면적형별분양현황</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"VALUE\">17.국토부 부동산거래관리시스템-대량신고</Col></Row><Row><Col id=\"CODE\">18</Col><Col id=\"VALUE\">18.계약자별선납집계표(기준일)</Col></Row><Row><Col id=\"CODE\">19</Col><Col id=\"VALUE\">19.계약자 사업자 현황</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_OPTION", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">분양</Col><Col id=\"CODE\">N</Col></Row><Row><Col id=\"VALUE\">옵션1</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"VALUE\">옵션2</Col><Col id=\"CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","339","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("0");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","0.0","staCD_ACNTUNIT:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회종류");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_GUBUN","staYM_WORK:0.0","staCD_ACNTUNIT:10.0","339","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dstTyGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divYnOption","cboTY_GUBUN:0.0","staCD_ACNTUNIT:10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoYN_OPTION","0.0","10.0","157","24.0",null,null,null,null,null,null,this.divSearch.form.divYnOption.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsYN_OPTION");
            obj.set_direction("vertical");
            obj.set_fittocontents("both");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("true");
            obj.set_text("정기");
            obj.set_value("J");
            obj.set_index("0");
            this.divSearch.form.divYnOption.addChild(obj.name, obj);

            obj = new Static("staYN_OPTION","crdoYN_OPTION:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form.divYnOption.form);
            obj.set_taborder("1");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.form.divYnOption.addChild(obj.name, obj);

            obj = new Div("divSrhDate","cboTY_GUBUN:0.0","10.0","365","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSrhDate.form);
            obj.set_taborder("0");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.form.divSrhDate.addChild(obj.name, obj);

            obj = new Calendar("calDT_FROM","sta00:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form.divSrhDate.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.form.divSrhDate.addChild(obj.name, obj);

            obj = new Static("sta00_00","calDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSrhDate.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.form.divSrhDate.addChild(obj.name, obj);

            obj = new Calendar("calDT_TO","sta00_00:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form.divSrhDate.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.form.divSrhDate.addChild(obj.name, obj);

            obj = new Div("divSrhDate2","0.0","staCD_ACNTUNIT:10.0","240","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_KIJUN","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSrhDate2.form);
            obj.set_taborder("0");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.form.divSrhDate2.addChild(obj.name, obj);

            obj = new Calendar("calDT_KIJUN","staDT_KIJUN:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form.divSrhDate2.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.form.divSrhDate2.addChild(obj.name, obj);

            obj = new CheckBox("chkTY_SEARCH","0.0","10.0","130","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("면적형 집계만 표시");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.divYnOption.form.crdoYN_OPTION","value","dsSearch","YN_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.divSrhDate.form.calDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.divSrhDate.form.calDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.divSrhDate2.form.calDT_KIJUN","value","dsSearch","DT_KIJUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.chkTY_SEARCH","value","dsSearch","TY_SEARCH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRB_TOTALSTATUS.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "TY_GUBUN", "1");	//1.은행제출용자료

        	var toDay = this.gfnGetDate();

        	this.dsSearch.setColumn(0, "DT_FROM"  , toDay);
        	this.dsSearch.setColumn(0, "DT_TO"    , toDay);
        	this.dsSearch.setColumn(0, "DT_KIJUN" , toDay);
        	this.dsSearch.setColumn(0, "YN_OPTION", "N");
        	this.dsSearch.setColumn(0, "TY_SEARCH", "0");

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
        	this.ccfCD_ACNTUNIT  = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.cboTY_GUBUN     = this.divSearch.form.cboTY_GUBUN;

        	this.divYnOption  = this.divSearch.form.divYnOption;
        	this.divSrhDate   = this.divSearch.form.divSrhDate;
        	this.divSrhDate2  = this.divSearch.form.divSrhDate2;

        	this.calDT_FROM   = this.divSearch.form.divSrhDate.form.calDT_FROM;
        	this.calDT_TO     = this.divSearch.form.divSrhDate.form.calDT_TO;
        	this.calDT_KIJUN  = this.divSearch.form.divSrhDate2.form.calDT_KIJUN;
        	this.chkTY_SEARCH = this.divSearch.form.chkTY_SEARCH;

        	this.dxGrid  	  = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRB_TOTALSTATUS_1");

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clear();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN"   , "string");
        	this.dsSelect.addColumn("NO_CHASU"   , "string");

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN"	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU"	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));

        	var tyGubun = this.dsSearch.getColumn(0, "TY_GUBUN");
        	switch(tyGubun) {
        		case "4"  :
        		case "5"  :
        		case "11" :
        			this.dsSelect.addColumn("YN_OPTION", "string");
        			this.dsSelect.setColumn(0, "YN_OPTION", this.dsSearch.getColumn(0, "YN_OPTION"));
        			break;
        		case "9"  :
        		case "13" :
        		case "17" :
        			this.dsSelect.addColumn("DT_FROM", "string");
        			this.dsSelect.addColumn("DT_TO"  , "string");
        			this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        			this.dsSelect.setColumn(0, "DT_TO"	, this.dsSearch.getColumn(0, "DT_TO"));
        			break;
        		case "10" :
        			this.dsSelect.addColumn("DT_KIJUN", "string");
        			this.dsSelect.setColumn(0, "DT_KIJUN", this.dsSearch.getColumn(0, "DT_KIJUN"));
        			break;
        		case "14" :
        		case "18" :
        			this.dsSelect.addColumn("DT_KIJUN",  "string");
        			this.dsSelect.addColumn("YN_OPTION", "string");
        			this.dsSelect.setColumn(0, "DT_KIJUN" , this.dsSearch.getColumn(0, "DT_KIJUN"));
        			this.dsSelect.setColumn(0, "YN_OPTION", this.dsSearch.getColumn(0, "YN_OPTION"));
        			break;
        		case "15" :
        			this.dsSelect.addColumn("DT_FROM"  , "string");
        			this.dsSelect.addColumn("DT_TO"	   , "string");
        			this.dsSelect.addColumn("YN_OPTION", "string");
        			this.dsSelect.setColumn(0, "DT_FROM"  , this.dsSearch.getColumn(0, "DT_FROM"));
        			this.dsSelect.setColumn(0, "DT_TO"	  , this.dsSearch.getColumn(0, "DT_TO"));
        			this.dsSelect.setColumn(0, "YN_OPTION", this.dsSearch.getColumn(0, "YN_OPTION"));
        			break;
        		case "16" :
        			this.dsSelect.addColumn("DT_KIJUN" , "string");
        			this.dsSelect.addColumn("TY_SEARCH", "string");
        			this.dsSelect.setColumn(0, "DT_KIJUN"  , this.dsSearch.getColumn(0, "DT_KIJUN"));
        			this.dsSelect.setColumn(0, "TY_SEARCH" , this.dsSearch.getColumn(0, "TY_SEARCH"));
        			break;
        	}

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select"+tyGubun+"=dsSelect";
        	var outData     = "dsList=select"+tyGubun+"0";
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

        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
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

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))){
        		this.gfnAlert("사업지코드는 필수입니다.");
        		this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		validate = false;
        	}

        	var tyGubun = this.dsSearch.getColumn(0, "TY_GUBUN");
        	switch(tyGubun) {
        		case "9"  :
        		case "13" :
        		case "15" :
        		case "17" :
        			if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM"))){
        				this.gfnAlert("기준일자(시작일)은 필수입니다.");
        				this.calDT_FROM.setFocus();
        				validate = false;
        			}

        			if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))){
        				this.gfnAlert("기준일자(종료일)은 필수입니다.");
        				this.calDT_TO.setFocus();
        				validate = false;
        			}

        			if(this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_FROM"), this.dsSearch.getColumn(0, "DT_TO")) <= -1){
        				this.gfnAlert("기준일자의 시작일은 종료일보다 작아야 합니다.");
        				this.calDT_FROM.setFocus();
        				validate = false;
        			}

        			break;
        		case "10" :
        		case "14" :
        		case "16" :
        		case "18" :
        			if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_KIJUN"))){
        				this.gfnAlert("기준일자는 필수입니다.");
        				this.calDT_KIJUN.setFocus();
        				validate = false;
        			}
        			break;
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
        		this.gfnGridAfterSelect(this.dxGrid);

        		//면적형별분양현황
        		if(this.dsSearch.getColumn(0, "TY_GUBUN") == "16"){
        			this.dxGrid.set_enableredraw(false);
        			var expr = "";
        			if(this.dsSearch.getColumn(0, "TY_SEARCH") == "0"){	//면적형 집계만 표시 미선택
        				this.dsList.set_keystring("S:-nx_sort,G:TY_BUNYANG,TY_SAEDAE,NO_SIZE,TY_TYPE,RT_OPTION,TY_DISTRICT");
        				expr = "expr:dataset.getRowLevel(currow) == 6? '분양구분:'+TY_BUNYANG:";
        				expr += "dataset.getRowLevel(currow) == 5? '세대구분:'+TY_SAEDAE:";
        				expr += "dataset.getRowLevel(currow) == 4? '면적형:'+NO_SIZE:";
        				expr += "dataset.getRowLevel(currow) == 3? '타입:'+TY_TYPE:";
        				expr += "dataset.getRowLevel(currow) == 2? '옵션:'+RT_OPTION:'구분:'+TY_DISTRICT";
        			}else{
        				this.dsList.set_keystring("S:-nx_sort,G:TY_BUNYANG,TY_SAEDAE,NO_SIZE,TY_TYPE");
        				expr = "expr:dataset.getRowLevel(currow) == 4? '분양구분:'+TY_BUNYANG:";
        				expr += "dataset.getRowLevel(currow) == 3? '세대구분:'+TY_SAEDAE:";
        				expr += "dataset.getRowLevel(currow) == 2? '면적형:'+NO_SIZE:";
        				expr += "dataset.getRowLevel(currow) == 1? '타입:'+TY_TYPE:''";
        			}

        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CNT_TOTAL"), "subsumtext", expr);
        			this.dxGrid.set_enableredraw(true);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT"	, this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER"	, this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP"	, this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"	, this.FormInfo.GR_SEARCH);
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
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "TY_GUBUN"){	//조회종류
        			this.chkTY_SEARCH.set_visible(false);	//면적형 집계만 표시
        			this.divYnOption.set_visible(false);	//구분 DIV
        			this.divSrhDate.set_visible(false);		//기준일자(from~to) DIV
        			this.divSrhDate2.set_visible(false);	//기준일자 DIV

        			var toDay = this.gfnGetDate();
        			this.dsSearch.setColumn(e.row, "DT_FROM"  , toDay);
        			this.dsSearch.setColumn(e.row, "DT_TO"    , toDay);
        			this.dsSearch.setColumn(e.row, "DT_KIJUN" , toDay);

        			switch(e.newvalue) {
        				case "4" :
        				case "5" :
        				case "11" :
        					this.divYnOption.set_visible(true);
        					break;
        				case "9" :
        				case "13" :
        				case "17" :
        					this.divSrhDate.set_visible(true);
        					this.divSrhDate.set_top(41);
        					this.divSrhDate.set_left(448);
        					break;
        				case "10" :
        				case "16" :
        					this.divSrhDate2.set_visible(true);
        					this.divSrhDate2.set_left(448);

        					if(e.newvalue == "16"){
        						this.chkTY_SEARCH.set_visible(true);
        					}
        					break;
        				case "14" :
        				case "18" :
        					this.divYnOption.set_visible(true);
        					this.divSrhDate2.set_visible(true);
        					this.divSrhDate2.set_left(670);
        					break;
        				case "15" :
        					this.divYnOption.set_visible(true);
        					this.divSrhDate.set_visible(true);
        					this.divSrhDate.set_top(41);
        					this.divSrhDate.set_left(670);
        					break;
        			}

        			this.fnGridSet(e.newvalue, obj.getColumn(e.row, "YN_OPTION"));

        		}

        		if(e.columnid == "YN_OPTION"){	//구분
        			this.fnGridSet(obj.getColumn(e.row, "TY_GUBUN"), e.newvalue);
        		}
        	}
        };

        this.fnGridSet = function(gridNo, ynOption){
        	if(gridNo == "4" || gridNo == "5" || gridNo == "11"){
        		if(ynOption != "N"){
        			gridNo += "_2";
        		}
        	}

        	this.dsList.set_keystring("S:-nx_sort");	//데이터셋에 기존 그리드 keystring 값이 남아있어 초기화 작업

        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRB_TOTALSTATUS_"+gridNo);

        	if(gridNo == "4"){
        		this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DS_CONTRACTOR"), "subsumtext", "expr:dataset.getRowLevel(currow) == 1? '호수:'+HOSU:'동:'+NO_DONG");
        	}else if(gridNo == "6"){
        		this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "TY_NAPIP"), "subsumtext", "expr:dataset.getRowLevel(currow) == 1? '호수:'+HOSU:'동:'+NO_DONG");
        	}else if(gridNo == "12"){
        		this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "NO_CONTRACT"), "subsumtext", "expr:dataset.getRowLevel(currow) == 1? '일자:'+DT_CONTRACT:''");
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.divYnOption.form.crdoYN_OPTION.addEventHandler("onitemchanged",this.divData_crdoCD_PROCDIV_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRB_TOTALSTATUS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
