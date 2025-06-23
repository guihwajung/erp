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
            this.set_titletext("레저시설 이용 승인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_LEISURE_SELECT</Col></Row><Row><Col id=\"TARGET\">approval</Col><Col id=\"SP\">DABPR_LEISURE_APPROVAL</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DABPR_LEISURE_DELETE</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DABPR_LEISURE_CANCEL</Col></Row><Row><Col id=\"TARGET\">selectRptMuju</Col><Col id=\"SP\">DABPR_LEISURE_MUJU_PRINT</Col></Row><Row><Col id=\"TARGET\">selectRptRequest</Col><Col id=\"SP\">DABPR_LEISURE_REQUEST_PRINT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_LEISURE_MANAGER_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_APPROVE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">결재중</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">승인완료</Col></Row><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">신청</Col></Row><Row><Col id=\"CODE\">D</Col><Col id=\"VALUE\">담당자승인</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"VALUE\">부서장승인</Col></Row><Row><Col id=\"CODE\">I</Col><Col id=\"VALUE\">임원승인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_REQUEST_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LEISURE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LEISURE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListExcel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LEISURE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","22",null,null,"0","6",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataExcel","0","divData:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("objGridExcel","0","22",null,null,"0","6",null,null,null,null,this.divDataExcel.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divDataExcel.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("사원");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staID_SABUN:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVE","ccfID_SABUN:0.0","staID_SABUN:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("승인상태");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_APPROVE","staTY_APPROVE:0.0","staID_SABUN:10.0","95","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsTY_APPROVE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","380","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_LEISURE","ccfCD_DEPT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_LEISURE","staCD_LEISURE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","ccfCD_LEISURE:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("신청기간");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDtFromRequest","staDT_REQUEST:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDtToRequest","calDtFromRequest:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO","calDtToRequest:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDtToEnd","0.0","staID_SABUN:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO00","calDtToEnd:0.0","staID_SABUN:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDtFromStart","staDT_ORD_TO00:0.0","staID_SABUN:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_START_END","calDtFromStart:0.0","staID_SABUN:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("이용시작일");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfID_SABUN:0.0","staID_SABUN:10.0","59","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.calDtFromRequest","value","dsSearch","DT_REQUEST_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calDtToRequest","value","dsSearch","DT_REQUEST_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_LEISURE.form.CDTextBox","value","dsSearch","CD_LEISURE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_LEISURE.form.DSTextBox","value","dsSearch","DS_LEISURE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccboTY_APPROVE","value","dsSearch","TY_APPROVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.calDtToEnd","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.calDtFromStart","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_LEISURE_APPROVAL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var gfTyFlag;

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

        	this.fnSetExtendButtonEnable(false);
        	this.fnCombo();

        	this.fnReset();

        };


        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(true);
        //	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        	this.FormBtns.Print.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("FormButton1", "fnFormButton1","담당자 승인");
        	this.btn2 = this.gfnFormButtonAdd("FormButton2", "fnFormButton2","부서장 승인");
        	this.btn3 = this.gfnFormButtonAdd("FormButton3", "fnFormButton3","임원 승인");
        	this.btn4 = this.gfnFormButtonAdd("FormButton4", "fnFormButton4","승인취소");
        	this.btn5 = this.gfnFormButtonAdd("FormButton5", "fnFormButton5","삭제");
        	this.btn6 = this.gfnFormButtonAdd("FormButton6", "fnFormButton6","무주객실이용권신청현황");
        	this.btn7 = this.gfnFormButtonAdd("FormButton7", "fnFormButton7","레저사업장신청자현황");
        	this.btn8 = this.gfnFormButtonAdd("FormButton8", "fnFormButton8","레저담당자송부파일");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGridExcel = this.divDataExcel.form.objGridExcel;

        	this.calDtFromRequest =	this.divSearch.form.calDtFromRequest; 	//신청기간(FROM)
        	this.calDtToRequest   =	this.divSearch.form.calDtToRequest;		//신청기간(TO)
        	this.ccfCD_DEPT 	  =	this.divSearch.form.ccfCD_DEPT;			//부서
        	this.ccfCD_LEISURE    =	this.divSearch.form.ccfCD_LEISURE;		//사업장
        	this.ccfID_SABUN 	  =	this.divSearch.form.ccfID_SABUN;		//사원
        	this.ccboTY_APPROVE	  =	this.divSearch.form.ccboTY_APPROVE;		//승인상태(신청:'', 담당자승인:'D', 부서장승인:'YY')
        	this.calDtFromStart   =	this.divSearch.form.calDtFromStart; 	//이용시작일(FROM)
        	this.calDtToEnd   	  =	this.divSearch.form.calDtToEnd;			//이용시작일(TO)

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_LEISURE.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_LEISURE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_LEISURE_APPROVAL");

        	this.gfnGridInit(this.dxGridExcel, this.dsListExcel, "DA", "DAB_LEISURE_APPROVAL_EXCEL");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	this.ccboTY_APPROVE.set_index(0);
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        	if(e.columnid == "CHK") {
        		var chkCnt = 0;
        		var onlyRowIdx = 0;

        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if (i == 0) continue;

        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				onlyRowIdx = i;
        				chkCnt++;
        			} else {
        				this.dsList.setColumn(i, this.ucFlag, "");
        			}
        		}

        		if (chkCnt == 0) {
        			this.fnSetExtendButtonEnable(false);

        		} else if (chkCnt == 1) {
        			var chk2 = this.dsList.getColumn(onlyRowIdx, "CHK");
        			var ynApprove = this.dsList.getColumn(onlyRowIdx, "YN_APPROVE");		// 담당자 승인
        			var ynTeamleader = this.dsList.getColumn(onlyRowIdx, "YN_TEAMLEADER");	// 부서장 승인
        			var ynOfficer = this.dsList.getColumn(onlyRowIdx, "YN_OFFICER");		//임원승인

        			if (!this.gfnIsNull(ynApprove)) {
        				if (ynApprove == "Y") {
        					this.btn1.set_enable(false);

        				} else if (ynApprove == "N") {
        					this.btn1.set_enable(true);
        				}
        			} else {
        				this.btn1.set_enable(true);
        			}

        			if (!this.gfnIsNull(ynTeamleader)) {
        				if (ynTeamleader == "Y") {
        					this.btn2.set_enable(false);

        				} else if (ynTeamleader == "N") {
        					this.btn2.set_enable(true);
        				}
        			} else {
        				this.btn2.set_enable(true);
        			}

        			if (!this.gfnIsNull(ynOfficer)) {
        				if (ynOfficer == "Y") {
        					this.btn3.set_enable(false);

        				} else if (ynOfficer == "N") {
        					this.btn3.set_enable(true);
        				}
        			} else {
        				this.btn3.set_enable(true);
        			}

        			this.btn4.set_enable(true);

        		} else if (chkCnt > 1) {
        			this.fnSetExtendButtonEnable(true);
        			this.btn4.set_enable(true);	// 승인취소
        		}
        	}

        	this.FormBtns.Add.set_enable(false);
        	//this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_REQUEST_FROM", "string");
        	this.dsSelect.addColumn("DT_REQUEST_TO", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("CD_LEISURE", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("TY_APPROVE", "string");
        	this.dsSelect.addColumn("DT_START", "string");
        	this.dsSelect.addColumn("DT_END", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_PERSON", "string");
        	this.dsSave.addColumn("NO_SEQ", "string");
        	this.dsSave.addColumn("DT_START", "string");
        	this.dsSave.addColumn("DT_END", "string");
        	this.dsSave.addColumn("DS_R_DAYS", "string");
        	this.dsSave.addColumn("DS_R_RELATION", "string");
        	this.dsSave.addColumn("DS_R_RESERVE", "string");
        	this.dsSave.addColumn("NO_R_RESERVE", "string");
        	this.dsSave.addColumn("TY_R_ROOM", "string");
        	this.dsSave.addColumn("CT_R_ROOM", "string");
        	this.dsSave.addColumn("DS_G_RELATION1", "string");
        	this.dsSave.addColumn("DS_G_USER1", "string");
        	this.dsSave.addColumn("DT_G_USE1", "string");
        	this.dsSave.addColumn("DS_G_RELATION2", "string");
        	this.dsSave.addColumn("DS_G_USER2", "string");
        	this.dsSave.addColumn("DT_G_USE2", "string");
        	this.dsSave.addColumn("TY_A_SALE", "string");
        	this.dsSave.addColumn("NO_A_RESERVE", "string");
        	this.dsSave.addColumn("DS_A_USER", "string");
        	this.dsSave.addColumn("TY_A_ROOM", "string");
        	this.dsSave.addColumn("CT_A_ROOM", "string");
        	this.dsSave.addColumn("DS_A_DAYS", "string");
        	this.dsSave.addColumn("NO_B_RESERVE1", "string");
        	this.dsSave.addColumn("NO_B_RESERVE2", "string");
        	this.dsSave.addColumn("NO_B_RESERVE3", "string");
        	this.dsSave.addColumn("NO_B_RESERVE4", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("DT_REQUEST", "string");
        	this.dsSave.addColumn("CD_LEISURE", "string");
        	this.dsSave.addColumn("CT_RR_POINT", "string");
        	this.dsSave.addColumn("CT_GR_POINT", "string");
        	this.dsSave.addColumn("CT_GU_POINT", "string");



        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("TY_FLAG", "string");
        	this.dsApproval.addColumn("ID_PERSON", "string");
        	this.dsApproval.addColumn("NO_SEQ", "string");
        	this.dsApproval.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("ID_PERSON", "string");
        	this.dsDelete.addColumn("NO_SEQ", "string");
        	this.dsDelete.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if(!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnSetFormStatus(this);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();


        	var GR_SEARCH = this.FormInfo.GR_SEARCH;

        	this.dsSelect.setColumn(0, "DT_REQUEST_FROM", this.calDtFromRequest.value);			//신청기간(FROM)
        	this.dsSelect.setColumn(0, "DT_REQUEST_TO", this.calDtToRequest.value);				//신청기간(TO)
        	this.dsSelect.setColumn(0, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);		//부서
        	this.dsSelect.setColumn(0, "CD_LEISURE", this.ccfCD_LEISURE.form.CDTextBox.value);	//사업장
        	this.dsSelect.setColumn(0, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);		//사원
        	this.dsSelect.setColumn(0, "TY_APPROVE", this.ccboTY_APPROVE.value);				//승인상태(신청:'', 담당자승인:'D', 부서장승인:'YY')
        	this.dsSelect.setColumn(0, "DT_START", this.calDtFromStart.value);					//이용시작일(FROM)
        	this.dsSelect.setColumn(0, "DT_END", this.calDtToEnd.value);						//이용시작일(TO)
        	this.dsSelect.setColumn(0, "GR_SEARCH", GR_SEARCH);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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




        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	// 그리드 필수항목 체크
        	//if (!this.fnSaveValidation()) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "DT_START", this.dsList.getColumn(i, "DT_START"));
        				this.dsSave.setColumn(nrow, "DT_END", this.dsList.getColumn(i, "DT_END"));
        				this.dsSave.setColumn(nrow, "DS_R_DAYS", this.dsList.getColumn(i, "DS_R_DAYS"));
        				this.dsSave.setColumn(nrow, "DS_R_RELATION", this.dsList.getColumn(i, "DS_R_RELATION"));
        				this.dsSave.setColumn(nrow, "DS_R_RESERVE", this.dsList.getColumn(i, "DS_R_RESERVE"));
        				this.dsSave.setColumn(nrow, "NO_R_RESERVE", this.dsList.getColumn(i, "NO_R_RESERVE"));
        				this.dsSave.setColumn(nrow, "TY_R_ROOM", this.dsList.getColumn(i, "TY_R_ROOM"));
        				this.dsSave.setColumn(nrow, "CT_R_ROOM", this.dsList.getColumn(i, "CT_R_ROOM"));
        				this.dsSave.setColumn(nrow, "DS_G_RELATION1", this.dsList.getColumn(i, "DS_G_RELATION1"));
        				this.dsSave.setColumn(nrow, "DS_G_USER1", this.dsList.getColumn(i, "DS_G_USER1"));
        				this.dsSave.setColumn(nrow, "DT_G_USE1", this.dsList.getColumn(i, "DT_G_USE1"));
        				this.dsSave.setColumn(nrow, "DS_G_RELATION2", this.dsList.getColumn(i, "DS_G_RELATION2"));
        				this.dsSave.setColumn(nrow, "DS_G_USER2", this.dsList.getColumn(i, "DS_G_USER2"));
        				this.dsSave.setColumn(nrow, "DT_G_USE2", this.dsList.getColumn(i, "DT_G_USE2"));
        				this.dsSave.setColumn(nrow, "TY_A_SALE", this.dsList.getColumn(i, "TY_A_SALE"));
        				this.dsSave.setColumn(nrow, "NO_A_RESERVE", this.dsList.getColumn(i, "NO_A_RESERVE"));
        				this.dsSave.setColumn(nrow, "DS_A_USER", this.dsList.getColumn(i, "DS_A_USER"));
        				this.dsSave.setColumn(nrow, "TY_A_ROOM", this.dsList.getColumn(i, "TY_A_ROOM"));
        				this.dsSave.setColumn(nrow, "CT_A_ROOM", this.dsList.getColumn(i, "CT_A_ROOM"));
        				this.dsSave.setColumn(nrow, "DS_A_DAYS", this.dsList.getColumn(i, "DS_A_DAYS"));
        				this.dsSave.setColumn(nrow, "NO_B_RESERVE1", this.dsList.getColumn(i, "NO_B_RESERVE1"));
        				this.dsSave.setColumn(nrow, "NO_B_RESERVE2", this.dsList.getColumn(i, "NO_B_RESERVE2"));
        				this.dsSave.setColumn(nrow, "NO_B_RESERVE3", this.dsList.getColumn(i, "NO_B_RESERVE3"));
        				this.dsSave.setColumn(nrow, "NO_B_RESERVE4", this.dsList.getColumn(i, "NO_B_RESERVE4"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "DT_REQUEST", this.dsList.getColumn(i, "DT_REQUEST"));
        				this.dsSave.setColumn(nrow, "CD_LEISURE", this.dsList.getColumn(i, "CD_LEISURE"));
        				this.dsSave.setColumn(nrow, "CT_RR_POINT", this.dsList.getColumn(i, "CT_RR_POINT"));
        				this.dsSave.setColumn(nrow, "CT_GR_POINT", this.dsList.getColumn(i, "CT_GR_POINT"));
        				this.dsSave.setColumn(nrow, "CT_GU_POINT", this.dsList.getColumn(i, "CT_GU_POINT"));

        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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



        this.fnApproval = function(paramTyFlag) {
        	gfTyFlag = paramTyFlag;
        	// gfTyFlag - >  D:담당자 / B:부서장 / I:임원 / C:취소
        	var confirmMsg = "해당 레저시설 이용건을\r\n승인하시겠습니까?"
        	if(gfTyFlag == "C") confirmMsg = "해당 레저시설 이용건을\r\n승인취소 하시겠습니까?";
        	this.gfnConfirm(confirmMsg,	"fnApprovalCallback");
        }

        this.fnApprovalCallback = function(strId, val)  {
        	if(val == false) return;

        	// 승인구분 체크박스 해제
        	this.fnSetYnLeisure();

        	this.dsApproval.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			var nrow = this.dsApproval.addRow();

        			this.dsApproval.setColumn(nrow, "TY_FLAG", gfTyFlag);
        			this.dsApproval.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        			this.dsApproval.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        			this.dsApproval.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	var strSvcIdVal = "approval";
        	var inDataVal   = "approval=dsApproval";

        	if(gfTyFlag == "C"){
        		strSvcIdVal = "cancel";
        		inDataVal   = "cancel=dsApproval";
        	}

        	var strSvcId    = strSvcIdVal;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = inDataVal;
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	if (this.dsApproval.rowcount == 0) return;

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnDel = function() {

        	var fndRow = this.dsList.findRow("CHK", 1);
        	if (this.dsList.rowcount == 0 || fndRow <= -1) {
        		this.gfnAlert("삭제할 레저 이용건을 체크 하시기 바랍니다");
        		return;
        	}

        	this.gfnConfirm("해당 레저시설 이용건을\r\n삭제하시겠습니까?","fnDelCallback");

        }

        this.fnDelCallback = function(strId, val)  {
        	if(val == false) return;

        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			var nrow = this.dsDelete.addRow();
        			this.dsDelete.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        			this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        			this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "delete";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
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

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        // 	var today = this.gfnGetDate().substring(0,8);
        // 	this.dsList.setColumn(nrow, "DT_REGISTER", today);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /*
         *	초기화 버튼
         */
        this.fnReset  = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	this.ccboTY_APPROVE.set_index(0);
        	// ---------------------------//
        	//this.ctclDT_BASE.set_value('20190101');
        	//적용년도 셋팅

        	var today = this.gfnGetDate();
        	this.divSearch.form.calDtFromRequest.set_value(today);
         	this.divSearch.form.calDtToRequest.set_value(today);

        // 	//이용시작일
        // 	var todayFrom = this.gfnGetDate().substring(0,4); //현재 년도1월1일
        // 	this.divSearch.form.calDtFromStart.set_value(today); //현재 년도1월1일
        //
        // 	var todayFrom = this.gfnGetDate().substring(0,4); //현재 년도1월1일
        // 	this.divSearch.form.calDtToEnd.set_value(todayFrom); //현재 년도1월1일

        	this.FormBtns.Select.click();
        }

        /************************************************************************
         * Validate
         ************************************************************************/
         /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	var DT_REQUEST_FROM = this.dsSearch.getColumn(0, "DT_REQUEST_FROM");
        	var DT_REQUEST_TO = this.dsSearch.getColumn(0, "DT_REQUEST_TO");
        	if(!this.gfnIsNull(DT_REQUEST_FROM) && !this.gfnIsNull(DT_REQUEST_TO)){
        		if (DT_REQUEST_FROM > DT_REQUEST_TO) {
        			this.fnVaidateCallback = function() {
        				this.calDtFromRequest.setFocus();
        			}
        			this.gfnAlert("신청기간 시작일이 종료일보다 클 수 없습니다.", "fnVaidateCallback");
        			return false;
        		}
        	}

        	var DT_START = this.dsSearch.getColumn(0, "DT_START");
        	var DT_END = this.dsSearch.getColumn(0, "DT_END");
        	if(!this.gfnIsNull(DT_START) && !this.gfnIsNull(DT_END)){
        		if (DT_START > DT_END) {
        			this.fnVaidateCallback = function() {
        				this.calDtFromStart.setFocus();
        			}
        			this.gfnAlert("이용기간 시작일이 종료일보다 클 수 없습니다.", "fnVaidateCallback");
        			return false;
        		}
        	}

        	return true;
        };

        // paramTyFlag - >  D:담당자 / B:부서장 / I:임원 / C:취소

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
        		this.fnSetButton();
        	} else if(svcID == "approval") {
        		if (errorCode == 0) {
        			this.gfnAlert("승인이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	} else if(svcID == "selectExcel") {
        		var CD_LEISURE = "";
        		var DS_CODE = "";
        		for (var i = 0; i < this.dsCD_LEISURE.rowcount; i++) {
        			this.dsListExcel.filter("");
        			CD_LEISURE = this.dsCD_LEISURE.getColumn(i, "CD_CODE");
        			DS_CODE = this.dsCD_LEISURE.getColumn(i, "DS_CODE");

        			var nRowCnt = this.dsListExcel.getCaseCount( "CD_LEISURE == '"+CD_LEISURE+"'" );
        			if(nRowCnt > 0){
        				this.dsListExcel.filter("CD_LEISURE == '"+CD_LEISURE+"'");

        				for (var j = 0; j < this.dsListExcel.rowcount; j++) {
        					var nRowNum = j + 1;
        					this.dsListExcel.setColumn(j, "ROW_NUM", nRowNum);
        				}

        				var sFileName = this.gfnGetArgument("NM_FORM")+"_"+ DS_CODE +"_"+ this.gfnGetDate();
        				this.gfnExcelExport(this.dxGridExcel, "▣ 레저시설이용 신청 명단", sFileName);
        			}
        		}

        	} else if(svcID == "delete") {
        		this.gfnAlert("삭제되었습니다.");
        		this.FormBtns.Select.click();
        	} else if(svcID == "cancel") {
        		if (errorCode == 0) {
        			this.gfnAlert("승인취소 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "save") {

        		if (errorCode == 0) {
        		//	this.gfnAlert("수정되었습니다.");
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
        	if(id = "DAX_CFDEPT"){
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        	}

        	if(id = "ccfCD_LEISURE"){
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "OO");
        	}

        	if(id = "DAX_CFBASEINFO"){
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
                dsUserParam.setColumn(nrow, "CD_DEPT", "");
                dsUserParam.setColumn(nrow, "TY_RETIRE", "");	// 재직구분
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;
        	switch(id) {
        		case "ccfID_SABUN"://사번
        			var ID_PERSON = "";
        			if(arr.length > 0) {
        				ID_PERSON = arr[0]["ID_PERSON"];
        			}
        			this.divSearch.form.edtID_PERSON.set_value(ID_PERSON);

        		break;

        		default:
        	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	if(id == "DAX_CFBASEINFO_ALL"){	// 승인권자 사번
        		dsUserParam.setColumn(nrow, "CD_CORP", "%");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");	// 재직구분
        	}
        	return true;
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         * 커스텀 버튼 이벤트
         */

        // 팝업1-담당자 승인
        this.fnFormButton1 = function(obj,e) {
        	this.fnApproval("D");
        }

        // 팝업2-부서장 승인
        this.fnFormButton2 = function(obj,e) {
        	this.fnApproval("B");
        }

        // 팝업3-임원 승인
        this.fnFormButton3 = function(obj,e) {
        	this.fnApproval("I");
        }

        // 팝업4-승인취소
        this.fnFormButton4 = function(obj,e) {
        	this.fnApproval("C");
        }

        // 팝업5-삭제
        this.fnFormButton5 = function(obj,e) {
        	this.fnDel();
        }

        // 팝업6-무주객실이용권신청현황
        this.fnFormButton6 = function(obj,e) {

        	var nRowIdx = this.dsList.rowposition;
        	var param = {};
        	param.GR_SEARCH = this.FormInfo.GR_SEARCH;
        	param.DT_REQUEST_FROM = this.dsSearch.getColumn(0, "DT_REQUEST_FROM");
        	param.DT_REQUEST_TO = this.dsSearch.getColumn(0, "DT_REQUEST_TO");
        	param.ID_SABUN = this.dsSearch.getColumn(0, "ID_SABUN");
        	param.DS_SABUN = this.dsSearch.getColumn(0, "DS_SABUN");
        	param.ID_PERSON = this.dsSearch.getColumn(0, "ID_PERSON");
        	param.DT_START = this.dsSearch.getColumn(0, "DT_START");
        	param.DT_END = this.dsSearch.getColumn(0, "DT_END");

        	this.gfnFormOpen("DAB", "DAB_LEISURE_MUJU_PRINT_DLG", "fnPopupCallback", param);
        }

        // 팝업7-레저사업장신청자현황
        this.fnFormButton7 = function(obj,e) {

        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("DT_REQUEST_FROM", "string"); 		// 신청일
        	this.dsReportParam.addColumn("DT_REQUEST_TO", "string"); 		// 신청일

        	this.dsReportParam.clearData();


        	var DT_REQUEST_FROM = this.dsSearch.getColumn(0, "DT_REQUEST_FROM");
        	var DT_REQUEST_TO = this.dsSearch.getColumn(0, "DT_REQUEST_TO");

        	if(this.gfnIsNull(DT_REQUEST_FROM)) {
        		this.gfnAlert("신청기간 시작일은 반드시 입력 하셔야 합니다");
        		return false;
        	}

        	if(this.gfnIsNull(DT_REQUEST_TO)) {
        		this.gfnAlert("신청기간 종료일은 반드시 입력 하셔야 합니다");
        		return false;
        	}

        	if (DT_REQUEST_FROM > DT_REQUEST_TO) {
        		this.fnVaidateCallback = function() {
        			this.calDtFromRequest.setFocus();
        		}
        		this.gfnAlert("신청기간 시작일이 종료일보다 클 수 없습니다.", "fnVaidateCallback");
        		return false;
        	}

        	if(DT_REQUEST_FROM.substr(0,4) != DT_REQUEST_TO.substr(0,4)){
        		this.gfnAlert("신청기간은 동일한 년도로 입력 하셔야 합니다.");
        		return false;
        	}

        	var nrow = this.dsReportParam.addRow();
        	this.dsReportParam.setColumn(nrow, "DT_REQUEST_FROM", DT_REQUEST_FROM); 		// 신청일
        	this.dsReportParam.setColumn(nrow, "DT_REQUEST_TO", DT_REQUEST_TO); 		// 신청일

        	// DABPR_LEISURE_REQUEST_PRINT
        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";
        	var inParam 	= "";
        	var inData      = "selectRptRequest=dsReportParam";
        	var reportpath  = "/da/dab/DAB_LEISURE_REQUEST.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }

        this.fnFormButton8 = function(obj,e) {

        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("DT_REQUEST_FROM", "string"); 		// 신청일
        	this.dsReportParam.addColumn("DT_REQUEST_TO", "string"); 		// 신청일

        	this.dsListExcel.clearData();
        	this.dsReportParam.clearData();

        	var DT_REQUEST_FROM = this.dsSearch.getColumn(0, "DT_REQUEST_FROM");
        	var DT_REQUEST_TO = this.dsSearch.getColumn(0, "DT_REQUEST_TO");
        	//var CD_LEISURE = this.dsSearch.getColumn(0, "CD_LEISURE");

        	if(this.gfnIsNull(DT_REQUEST_FROM)) {
        		this.gfnAlert("신청기간 시작일은 반드시 입력 하셔야 합니다");
        		return false;
        	}

        	if(this.gfnIsNull(DT_REQUEST_TO)) {
        		this.gfnAlert("신청기간 종료일은 반드시 입력 하셔야 합니다");
        		return false;
        	}

        	if (DT_REQUEST_FROM > DT_REQUEST_TO) {
        		this.fnVaidateCallback = function() {
        			this.calDtFromRequest.setFocus();
        		}
        		this.gfnAlert("신청기간 시작일이 종료일보다 클 수 없습니다.", "fnVaidateCallback");
        		return false;
        	}

        	if(DT_REQUEST_FROM.substr(0,4) != DT_REQUEST_TO.substr(0,4)){
        		this.gfnAlert("신청기간은 동일한 년도로 입력 하셔야 합니다.");
        		return false;
        	}

        	var nrow = this.dsReportParam.addRow();
        	this.dsReportParam.setColumn(nrow, "DT_REQUEST_FROM", DT_REQUEST_FROM); 		// 신청일
        	this.dsReportParam.setColumn(nrow, "DT_REQUEST_TO", DT_REQUEST_TO); 		// 신청일


        	// 공통에서 제공하는 gfnGridInit 제대로 머지를 못해줘서 수동으로 함 fnExcelMergeCell
        	//this.fnExcelMergeCell();

         	var strSvcId    = "selectExcel";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectRptRequest=dsReportParam";
        	var outData     = "dsListExcel=selectRptRequest0";
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

        this.fnDialogCallback = function(svcID, value){
        	this.FormBtns.Select.click();
        }

        //팝업 콜백
        this.fnPopupCallback = function(strId, value) {
        	// 무주객실이용권신청현황
        	if(strId.indexOf("DAB_LEISURE_MUJU_PRINT_DLG") > 0) {
        		if(value != false){
        			//var msg = "전표발행"
        			//var json = JSON.parse(val);
        			//if(json.TY_AUTOSLIP == "CANCEL") msg = msg + "취소";

        			this.dsReportParam = new Dataset();
        			this.dsReportParam.addColumn("TY_COUPON", "string");			// 쿠폰구분
        			this.dsReportParam.addColumn("NO_NUMBER", "string"); 			// 일련번호
        			this.dsReportParam.addColumn("DT_DEPOSIT_FROM", "string"); 		// 입금기간
        			this.dsReportParam.addColumn("DT_DEPOSIT_TO", "string"); 		// 입금기간
        			this.dsReportParam.addColumn("DT_REQUEST_FROM", "string"); 		// 신청기간
        			this.dsReportParam.addColumn("DT_REQUEST_TO", "string"); 		// 신청기간
        			this.dsReportParam.addColumn("DS_HNAME", "string"); 			// 성명
        			this.dsReportParam.addColumn("ID_PERSON", "string"); 			// 성명

        			this.dsReportParam.clearData();
        			var nrow = this.dsReportParam.addRow();

        			var json = JSON.parse(value);
        			this.dsReportParam.setColumn(nrow, "TY_COUPON", json.TY_COUPON);
        			this.dsReportParam.setColumn(nrow, "NO_NUMBER", json.NO_NUMBER);
        			this.dsReportParam.setColumn(nrow, "DT_DEPOSIT_FROM", json.DT_DEPOSIT_FROM);
        			this.dsReportParam.setColumn(nrow, "DT_DEPOSIT_TO", json.DT_DEPOSIT_TO);
        			this.dsReportParam.setColumn(nrow, "DT_REQUEST_FROM", json.DT_REQUEST_FROM);
        			this.dsReportParam.setColumn(nrow, "DT_REQUEST_TO", json.DT_REQUEST_TO);
        			this.dsReportParam.setColumn(nrow, "DS_HNAME", json.DS_SABUN);
        			this.dsReportParam.setColumn(nrow, "ID_PERSON", json.ID_PERSON);

        			// DABPR_LEISURE_MUJU_PRINT
        			var inProc		= "_dsProc";
        			//var inParam 	= "params=dsReportParam";
        			var inParam 	= "";
        			var inData      = "selectRptMuju=dsReportParam";
        			var reportpath  = "/da/dab/DAB_LEISURE_MUJU.ozr";

        			gfnOpenReport(this, reportpath, inProc, inParam, inData);

        		}
        	}
        };

        /*
         *	확장버튼 활성화 여부
         */
        this.fnSetExtendButtonEnable = function(bEnable){
        	this.btn1.set_enable(bEnable);
        	this.btn2.set_enable(bEnable);
        	this.btn3.set_enable(bEnable);
        	this.btn4.set_enable(bEnable);
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 승인 구분에 따라 선택한 체크박스 해제
        this.fnSetYnLeisure = function() {
        	// gfTyFlag - >  D:담당자 / B:부서장 / I:임원 / C:취소
        	if(gfTyFlag == "B" || gfTyFlag == "I"){
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				var TY_MANAGER = this.dsList.getColumn(i, "TY_MANAGER");	// Y 전체권한 / B 부서장 / I 임직원 / N 권한없음
        				if( TY_MANAGER == "N" || (gfTyFlag == "B" && TY_MANAGER == "I" ) || (gfTyFlag == "I" && TY_MANAGER == "B") ){
        					this.dsList.setColumn(i, "CHK", 0);
        				}
        			}
        		}
        	}
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.fnCheckFlag = function(objGrid) {
        	var chkCount = 0;
        	//var objDs = objGrid.getBindDataset();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if(flag == "U") {
        			var chkVal = this.dsList.getColumn(i, "CHK");
        			if(chkVal == 1){
        				chkCount++;
        			}
        		}
        	}

        	if(chkCount == 0) {
        		return false;
        	}else{
        		return true;
        	}
        }

        // 콤보 조회
        this.fnCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
         	this.dsCombo.addColumn("CD_PREFIX", "string");

        	this.dsCombo.clearData();

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "TY_SEL", "P");
        	this.dsCombo.setColumn(0, "CD_PREFIX", "OO");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_LEISURE=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnExcelMergeCell = function() {

        	 // merge 되면서 cell index가 조정된다.

        	//this.dxGridExcel, this.dsListExcel
        	//  Grid 에 표시되어 있는 포맷에서 특정 Cell 들을 병합(Merge) 하여 하나의 Cell로 만드는 메소드입니다.

        	//enumBand, nStartSubRow, nStartCol, nEndSubRow, nEndCol, nFirstCell, bKeepSubCell
        	var nStartSubRow = 0;	// Cell 중 좌상단 Cell 의 Sub Row 인덱스
        	var nStartCol = 3;		// Cell 중 좌상단 Cell 의 Column 인덱스
        	var nEndSubRow = 1; 	// Cell 중 우하단 Cell 의 Sub Row 인덱스
        	var nEndCol = 7;		// Cell 중 우하단 Cell 의 Column 인덱스
        	var nFirstCell = 3;		// Cell 에 적용할 속성의 기준이 되는 Cell 의 Cell 인덱스

        	// 신청자내역
        	this.dxGridExcel.mergeContentsCell("head", nStartSubRow, nStartCol, nEndSubRow, nEndCol, nFirstCell, false);

        	nStartCol = 8;	// Cell 중 좌상단 Cell 의 Column 인덱스
        	nEndCol = 9;	// Cell 중 우하단 Cell 의 Column 인덱스
        	nFirstCell = 4;		// Cell 에 적용할 속성의 기준이 되는 Cell 의 Cell 인덱스

        	// 실사용자 내역
        	this.dxGridExcel.mergeContentsCell("head", nStartSubRow, nStartCol, nEndSubRow, nEndCol, nFirstCell, false);

        	nStartCol = 13;		// Cell 중 좌상단 Cell 의 Column 인덱스
        	nEndCol = 17;		// Cell 중 우하단 Cell 의 Column 인덱스
        	nFirstCell = 8;	// Cell 에 적용할 속성의 기준이 되는 Cell 의 Cell 인덱스

        	// 객실이용내역
        	this.dxGridExcel.mergeContentsCell("head", nStartSubRow, nStartCol, nEndSubRow, nEndCol, nFirstCell, false);

        	nStartCol = 18;		// Cell 중 좌상단 Cell 의 Column 인덱스
        	nEndCol = 21;		// Cell 중 우하단 Cell 의 Column 인덱스
        	nFirstCell = 9;	// Cell 에 적용할 속성의 기준이 되는 Cell 의 Cell 인덱스

        	// 골프이용내역
        	this.dxGridExcel.mergeContentsCell("head", nStartSubRow, nStartCol, nEndSubRow, nEndCol, nFirstCell, false);

        	nStartCol = 22;		// Cell 중 좌상단 Cell 의 Column 인덱스
        	nEndCol = 23;		// Cell 중 우하단 Cell 의 Column 인덱스
        	nFirstCell = 10;	// Cell 에 적용할 속성의 기준이 되는 Cell 의 Cell 인덱스

        	// 무주쿠폰내역
        	this.dxGridExcel.mergeContentsCell("head", nStartSubRow, nStartCol, nEndSubRow, nEndCol, nFirstCell, false);

        	nStartSubRow = 2;	// Cell 중 좌상단 Cell 의 Sub Row 인덱스
        	nStartCol = 15;		// Cell 중 좌상단 Cell 의 Column 인덱스
        	nEndSubRow = 2; 	// Cell 중 우하단 Cell 의 Sub Row 인덱스
        	nEndCol = 16;		// Cell 중 우하단 Cell 의 Column 인덱스
        	nFirstCell = 26;	// Cell 에 적용할 속성의 기준이 되는 Cell 의 Cell 인덱스

        	// 이용기간
        	this.dxGridExcel.mergeContentsCell("head", nStartSubRow, nStartCol, nEndSubRow, nEndCol, nFirstCell, false);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staID_SABUN.addEventHandler("onclick",this.divSearch_staCD_POSITION_onclick,this);
            this.divSearch.form.staTY_APPROVE.addEventHandler("onclick",this.divSearch_staCD_CORP_onclick,this);
            this.divSearch.form.ccboTY_APPROVE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.staCD_DEPT.addEventHandler("onclick",this.divSearch_staCD_POSITION_onclick,this);
            this.divSearch.form.staCD_LEISURE.addEventHandler("onclick",this.divSearch_staCD_POSITION_onclick,this);
            this.divSearch.form.calDtFromRequest.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.calDtToRequest.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.calDtToEnd.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.calDtFromStart.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_LEISURE_APPROVAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
