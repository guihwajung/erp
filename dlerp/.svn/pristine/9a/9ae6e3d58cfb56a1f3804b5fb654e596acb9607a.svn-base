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
            this.set_titletext("학자금 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_TUITION_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_TUITION_SAVE</Col></Row><Row><Col id=\"TARGET\">cfm</Col><Col id=\"SP\">DABPR_TUITION_APPROVAL</Col></Row><Row><Col id=\"TARGET\">canc</Col><Col id=\"SP\">DABPR_TUITION_APPROVAL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"ID_SABUN\"/><Col id=\"DS_HNAME\"/><Col id=\"ID_PERSON\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_TUITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">1분기</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">2분기</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">3분기</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">4분기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCD_TUITION","0.0","10.0","106","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsCD_TUITION");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","cboCD_TUITION:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_CORP:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","ccfID_SABUN:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfYY_TUITION","staCD_CORP00:0.0","10.0","79","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00_00","ccfYY_TUITION:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("분기");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfID_SABUN:0.0","10.0","78","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new BindItem("item0","divSearch.form.ccfYY_TUITION.form.TextBox","value","dsSearch","YY_TUITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboCD_TUITION","value","dsSearch","CD_TUITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_TUITION_MASTER.xfdl", function() {
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

        	var today = this.gfnGetDate();
        	var year = today.substr(0,4);

        	this.ccfYY_TUITION.form.TextBox.set_value(year);
        	var nQuarter = this.fnGetQuarter(today);
        	this.cboCD_TUITION.set_value(nQuarter);

        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);


        	//화면 로드시 자동조회
        	//this.FormBtns.Select.click();
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
        	this.btnPeriod = this.gfnFormButtonAdd("Period", "fnPeriod"); //학자금기한설정
        	this.btnCfm = this.gfnFormButtonAdd("Cfm", "fnCfm");	//승인
        	this.btnCanc = this.gfnFormButtonAdd("Canc", "fnCanc");	//반려
        	this.btnPayApply = this.gfnFormButtonAdd("PayApply", "fnPayApply"); //급여적용
        };



        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.dxGrid = this.divData.form.objGrid;

        	this.ccfYY_TUITION = this.divSearch.form.ccfYY_TUITION;
        	this.cboCD_TUITION = this.divSearch.form.cboCD_TUITION;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.edtID_PERSON = this.divSearch.form.edtID_PERSON;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_TUITION_MASTER");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";	// 그리드 코드파인드 설정
         	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";	// 그리드 코드파인드 값 변경
         	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";// 셀 변경 후 이벤트
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("YY_TUITION", "string");
        	this.dsSelect.addColumn("CD_TUITION", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("YY_TUITION", "string");
        	this.dsSave.addColumn("CD_TUITION", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("DT_REQUEST", "string");
        	this.dsSave.addColumn("CD_FAMILY", "string");
        	this.dsSave.addColumn("ID_RESIDENT", "string");
        	this.dsSave.addColumn("DT_BIRTH", "string");
        	this.dsSave.addColumn("DS_FAM_HNAME", "string");
        	this.dsSave.addColumn("CD_SCHOLARSHIP", "string");
        	this.dsSave.addColumn("DS_SCHOOL", "string");
        	this.dsSave.addColumn("DS_SCHOOL_GRADE", "string");
        	this.dsSave.addColumn("DS_SCHOOL_SEMESTER", "string");
        	this.dsSave.addColumn("DS_MAJOR", "string");
        	this.dsSave.addColumn("AM_TUITION", "bigdecimal");
        	this.dsSave.addColumn("AM_PAYMENT", "bigdecimal");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("GR_CORP", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsCfm = new Dataset();
        	this.dsCfm.addColumn("TY_APPROVAL", "string");
        	this.dsCfm.addColumn("ID_PERSON", "int");
        	this.dsCfm.addColumn("YY_TUITION", "string");
        	this.dsCfm.addColumn("CD_TUITION", "string");
        	this.dsCfm.addColumn("NO_SEQ", "int");
        	this.dsCfm.addColumn("CD_CORP", "string");
        	this.dsCfm.addColumn("ID_SABUN", "string");
        	this.dsCfm.addColumn("ID_RESIDENT", "string");
        	this.dsCfm.addColumn("DS_FAM_HNAME", "string");
        	this.dsCfm.addColumn("GR_SEARCH", "string");
        	this.dsCfm.addColumn("GR_CORP", "string");
        	this.dsCfm.addColumn("GR_DEPT", "string");
        	this.dsCfm.addColumn("ID_USER", "string");

        	this.dsPayApply = new Dataset();
        	this.dsPayApply.addColumn("YN_MAGAM", "string");
        	this.dsPayApply.addColumn("CD_CORP", "string");
        	this.dsPayApply.addColumn("YY_TUITION", "string");
        	this.dsPayApply.addColumn("CD_TUITION", "string");
        	this.dsPayApply.addColumn("YN_SALARY", "string");
        	this.dsPayApply.addColumn("YM_SALARY", "string");
        	this.dsPayApply.addColumn("TY_SALARY", "string");
        	this.dsPayApply.addColumn("SN_SALARY", "int");
        	this.dsPayApply.addColumn("GR_SEARCH", "string");
        	this.dsPayApply.addColumn("GR_CORP", "string");
        	this.dsPayApply.addColumn("GR_DEPT", "string");
        	this.dsPayApply.addColumn("ID_USER", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValid()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnSetFormStatus(this);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));
        	this.dsSelect.setColumn(0, "YY_TUITION", this.dsSearch.getColumn(0, "YY_TUITION"));
        	this.dsSelect.setColumn(0, "CD_TUITION", this.dsSearch.getColumn(0, "CD_TUITION"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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

        this.fnSelectValid = function(){
        	if(this.gfnIsNull(this.ccfYY_TUITION.form.TextBox.value)){
        		this.fnValidCallback = function(){
        			this.ccfYY_TUITION.form.TextBox.setFocus();
        		}
        		this.gfnAlert("년도를 선택하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.cboCD_TUITION.value)){
        		this.fnValidCallback = function(){
        			this.cboCD_TUITION.setFocus();
        		}
        		this.gfnAlert("분기를 선택하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        		this.fnValidCallback = function(){
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 선택하세요!", "fnValidCallback");
        		return false;
        	}
        	return true;
        }

        this.fnAdd = function() {
        	if(!this.fnSelectValid()) return;
        	var nrow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.setColumn(nrow, "YY_TUITION", this.dsSearch.getColumn(0, "YY_TUITION"));
        	this.dsList.setColumn(nrow, "CD_TUITION", this.dsSearch.getColumn(0, "CD_TUITION"));
        	this.dsList.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsList.setColumn(nrow, "DS_CORP", this.dsSearch.getColumn(0, "DS_CORP"));

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var rows = this.dxGrid.getSelectedDatasetRows();
        	if(rows.length > 0) {
        		for(var i =0; i < rows.length; i++) {
        			var nrow = rows[i];
        			if(this.gfnNvl(this.dsList.getColumn(nrow, "FILE_CNT"), 0) > 0){
        				this.gfnAlert("첨부파일 먼저 삭제하세요!");
        				return;
        			}
        		}
        	}
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

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
        				this.dsSave.setColumn(nrow, "YY_TUITION", this.dsList.getColumn(i, "YY_TUITION"));
        				this.dsSave.setColumn(nrow, "CD_TUITION", this.dsList.getColumn(i, "CD_TUITION"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", (flag == "I" ? 0 : this.dsList.getColumn(i, "NO_SEQ") ));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.gfnNvl(this.dsList.getColumn(i, "CD_CORP"), ""));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.gfnNvl(this.dsList.getColumn(i, "ID_SABUN"), ""));
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.gfnNvl(this.dsList.getColumn(i, "CD_DEPT"), ""));
        				this.dsSave.setColumn(nrow, "DT_REQUEST", this.gfnNvl(this.dsList.getColumn(i, "DT_REQUEST"), ""));
        				this.dsSave.setColumn(nrow, "CD_FAMILY", this.gfnNvl(this.dsList.getColumn(i, "CD_FAMILY"), ""));
        				this.dsSave.setColumn(nrow, "ID_RESIDENT", this.gfnNvl(this.dsList.getColumn(i, "ID_RESIDENT"), ""));
        				this.dsSave.setColumn(nrow, "DT_BIRTH", this.gfnNvl(this.dsList.getColumn(i, "DT_BIRTH"), ""));
        				this.dsSave.setColumn(nrow, "DS_FAM_HNAME", this.gfnNvl(this.dsList.getColumn(i, "DS_FAM_HNAME"), ""));
        				this.dsSave.setColumn(nrow, "CD_SCHOLARSHIP", this.gfnNvl(this.dsList.getColumn(i, "CD_SCHOLARSHIP"), ""));
        				this.dsSave.setColumn(nrow, "DS_SCHOOL", this.gfnNvl(this.dsList.getColumn(i, "DS_SCHOOL"), ""));
        				this.dsSave.setColumn(nrow, "DS_SCHOOL_GRADE", this.gfnNvl(this.dsList.getColumn(i, "DS_SCHOOL_GRADE"), ""));
        				this.dsSave.setColumn(nrow, "DS_SCHOOL_SEMESTER", this.gfnNvl(this.dsList.getColumn(i, "DS_SCHOOL_SEMESTER"), ""));
        				this.dsSave.setColumn(nrow, "DS_MAJOR", this.gfnNvl(this.dsList.getColumn(i, "DS_MAJOR"), ""));
        				this.dsSave.setColumn(nrow, "AM_TUITION", this.gfnNvl(this.dsList.getColumn(i, "AM_TUITION"), 0));
        				this.dsSave.setColumn(nrow, "AM_PAYMENT", this.gfnNvl(this.dsList.getColumn(i, "AM_PAYMENT"), 0));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.gfnNvl(this.dsList.getColumn(i, "DS_REMARK"), ""));
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSave.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        				this.dsSave.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
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

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {
        }


        /************************************************************************
         * Validate
         ************************************************************************/

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
        	}
        	else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "cfm") {
        		if (errorCode == 0) {
        			this.fnWorkAfter = function(){
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("승인되었습니다.", "fnWorkAfter");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "canc") {
        		if (errorCode == 0) {
        			this.fnWorkAfter = function(){
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("반려되었습니다.", "fnWorkAfter");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "payApply") {
        		if (errorCode == 0) {
        			this.fnWorkAfter = function(){
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("급여적용되었습니다.", "fnWorkAfter");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_CORP"){
        		;

        	}
        	else if(id == "ccfID_SABUN"){
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        			this.fnValidCallback = function(){
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인을 선택하세요!", "fnValidCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value,"%"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        		this.ccfID_SABUN.form.fnCodeFindClear();
        		this.edtID_PERSON.set_value("");

        	}else if(id == "ccfID_SABUN"){
        		this.edtID_PERSON.set_value("");
        		if(arr.length >0){
        			this.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	if(id == "DAX_CFBASEINFO_ALL") {
        		// 사원명
        		var sCD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        		if(this.gfnIsNull(sCD_CORP)){
        			this.gfnAlert("법인을 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}
        	else if (id == "DAX_CFTUITION_CODEFIND") {
        		//학자금자녀코드파인더
        		var sID_SABUN = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        		var sID_PERSON = this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON");
        		if(this.gfnIsNull(sID_SABUN) || this.gfnIsNull(sID_PERSON)) {
        			this.gfnAlert("성명을 먼저 입력하세요.");
        			return false;
        		}
         		dsUserParam.setColumn(nrow, "ID_PERSON", sID_PERSON);
        		dsUserParam.setColumn(nrow, "ID_SABUN", sID_SABUN);
         	}
        	else if(id == "DAX_CFTUITION_SCHOLARSHIP"){
        		//학력구분
        		var sCD_TUITION = this.dsList.getColumn(this.dsList.rowposition, "CD_TUITION");
        		if(this.gfnIsNull(sCD_TUITION)) {
        			this.gfnAlert("분기를 먼저 입력하세요.");
        			return false;
        		}
         		dsUserParam.setColumn(nrow, "CD_TUITION", sCD_TUITION);
        	}

         	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	if(id == "DAX_CFBASEINFO_ALL") { //사원명
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			//trace("DAX_CFBASEINFO_ALL", arr[0]);
        		}else{
        		}
        	}
        	else if(id == "DAX_CFTUITION_CODEFIND") { //학자금자녀코드파인더
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			var sCD_SCHOLARSHIP = arr[0]["CD_SCHOLARSHIP"];
        			var sDS_SCHOLARSHIP = arr[0]["DS_SCHOLARSHIP"];
        			this.dsList.setColumn(this.dsList.rowposition, "CD_SCHOLARSHIP", sCD_SCHOLARSHIP);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_SCHOLARSHIP", sDS_SCHOLARSHIP);
        		}else{
        			this.dsList.setColumn(this.dsList.rowposition, "CD_SCHOLARSHIP", "");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_SCHOLARSHIP", "");
        		}
        	}
        };

        this.fnGrid_AfterEdit = function(obj,e) {
        	if(e.columnid == "DS_FAM_HNAME") {
        		if(e.oldvalue != e.newvalue && this.gfnIsNull(e.newvalue)) {
        			this.dsList.setColumn(this.dsList.rowposition, "CD_SCHOLARSHIP", "");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_SCHOLARSHIP", "");
        		}
        	}
        }

        this.fnGrid_ExpandUp = function(obj, e) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm == "CNT_FILE") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        		if(this.gfnGetFlag(this.dsList, e.row) == "I"){
        			this.gfnAlert("저장 후 파일첨부 진행.");
        			return false;
        		}

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DA08";
        		fileManager.CD_DIR = [this.dsList.getColumn(e.row, "YY_TUITION"), this.dsList.getColumn(e.row, "CD_TUITION"), this.dsList.getColumn(e.row, "ID_PERSON")];
        		fileManager.CD_REF = [this.dsList.getColumn(e.row, "ID_PERSON"), this.dsList.getColumn(e.row, "NO_SEQ")];
        		fileManager.IS_READONLY = false;
        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 변경시 조회를 다시 하거나
        // 	if(val.IsChange == true) {
        // 		this.FormBtns.Select.click();
        // 	}

        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, "CNT_FILE", "첨부");
        	} else {
        		this.dsList.setColumn(this.dsList.rowposition, "CNT_FILE", "첨부(" + val.Cnt + ")");
        	}
        	this.dsList.set_enableevent(true);
        };


        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 기한설정
        this.fnPeriod = function(obj,e) {
        	//if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen("DAB", "DAB_TUITION_PERIOD", "fnPeriodCallback", param);
        }

        // 승인
        this.fnCfm = function(obj,e) {
        	if (this.dsList.rowcount == 0) return;

        	if (this.dsList.findRow("CHK", "1") == -1) {
        		this.gfnAlert("대상자를 체크해주세요.");
        		return;
        	}

        	var nFindIdx = this.dsList.findRowExpr("CHK == '1' && YN_SALARY == 'Y'");
        	if(nFindIdx != -1){
        		this.gfnAlert("급여적용건에 대해서는 수정 불가 합니다.");
        		return;
        	}

        	this.gfnConfirm("승인하시겠습니까?", "fnCfmProc");
        }


        //승인 처리
        this.fnCfmProc = function(id,val){
        	if(val == false) return;

        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsCfm.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") != "1") continue;

        		var nrow = this.dsCfm.addRow();
        		this.dsCfm.setColumn(nrow, "TY_APPROVAL", "03"); //01:제출   00:제출취소 ,03:결재완료 04:반려
        		this.dsCfm.setColumn(nrow, "ID_PERSON", this.gfnNvl(this.dsList.getColumn(i, "ID_PERSON"), ""));
        		this.dsCfm.setColumn(nrow, "YY_TUITION", this.gfnNvl(this.dsList.getColumn(i, "YY_TUITION"), ""));
        		this.dsCfm.setColumn(nrow, "CD_TUITION", this.gfnNvl(this.dsList.getColumn(i, "CD_TUITION"), ""));
        		this.dsCfm.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        		this.dsCfm.setColumn(nrow, "CD_CORP", this.gfnNvl(this.dsList.getColumn(i, "CD_CORP"), ""));
        		this.dsCfm.setColumn(nrow, "ID_SABUN", this.gfnNvl(this.dsList.getColumn(i, "ID_SABUN"), ""));
        		this.dsCfm.setColumn(nrow, "ID_RESIDENT", this.gfnNvl(this.dsList.getColumn(i, "ID_RESIDENT"), ""));
        		this.dsCfm.setColumn(nrow, "DS_FAM_HNAME", this.gfnNvl(this.dsList.getColumn(i, "DS_FAM_HNAME"), ""));
        		this.dsCfm.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		this.dsCfm.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        		this.dsCfm.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        		this.dsCfm.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if (this.dsCfm.rowcount == 0) return;

        	var strSvcId    = "cfm";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cfm=dsCfm";
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

        // 반려
        this.fnCanc = function(obj,e) {
        	if (this.dsList.rowcount == 0) return;

        	if (this.dsList.findRow("CHK", "1") == -1) {
        		this.gfnAlert("대상자를 체크해주세요.");
        		return;
        	}

        	var nFindIdx = this.dsList.findRowExpr("CHK == '1' && YN_SALARY == 'Y'");
        	if(nFindIdx != -1){
        		this.gfnAlert("급여적용건에 대해서는 수정 불가 합니다.");
        		return;
        	}

        	this.gfnConfirm("반려하시겠습니까?", "fnCancProc");
        }

        //반려
        this.fnCancProc = function(id,val){
        	if(val == false) return;

        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsCfm.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") != "1") continue;

        		var nrow = this.dsCfm.addRow();
        		this.dsCfm.setColumn(nrow, "TY_APPROVAL", "04"); //01:제출   00:제출취소 ,03:결재완료 04:반려
        		this.dsCfm.setColumn(nrow, "ID_PERSON", this.gfnNvl(this.dsList.getColumn(i, "ID_PERSON"), ""));
        		this.dsCfm.setColumn(nrow, "YY_TUITION", this.gfnNvl(this.dsList.getColumn(i, "YY_TUITION"), ""));
        		this.dsCfm.setColumn(nrow, "CD_TUITION", this.gfnNvl(this.dsList.getColumn(i, "CD_TUITION"), ""));
        		this.dsCfm.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        		this.dsCfm.setColumn(nrow, "CD_CORP", this.gfnNvl(this.dsList.getColumn(i, "CD_CORP"), ""));
        		this.dsCfm.setColumn(nrow, "ID_SABUN", this.gfnNvl(this.dsList.getColumn(i, "ID_SABUN"), ""));
        		this.dsCfm.setColumn(nrow, "ID_RESIDENT", this.gfnNvl(this.dsList.getColumn(i, "ID_RESIDENT"), ""));
        		this.dsCfm.setColumn(nrow, "DS_FAM_HNAME", this.gfnNvl(this.dsList.getColumn(i, "DS_FAM_HNAME"), ""));
        		this.dsCfm.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		this.dsCfm.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        		this.dsCfm.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        		this.dsCfm.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if (this.dsCfm.rowcount == 0) return;

        	var strSvcId    = "canc";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "canc=dsCfm";
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

        // 급여적용
        this.fnPayApply = function(obj,e) {
        	var param = {};
        	param.YY_TUITION = this.ccfYY_TUITION.form.TextBox.value;
        	param.CD_TUITION = this.cboCD_TUITION.value;
        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;

        	trace("param", param);

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_TUITION_MASTER_DLG", "fnPayApply_callback", param);
        }

        this.fnPayApply_callback = function(id, val){
        	if(this.gfnIsNull(val)) return;
        	if(val == false) return;

        	this.FormBtns.Select.click();
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnGetQuarter = function(today){
        	var nMonth = parseInt(today.substr(4,2));

        	if(nMonth >= 1 && nMonth <= 3){
        		return "01";
        	}
        	else if(nMonth >= 4 && nMonth <= 6){
        		return "02";
        	}
        	else if(nMonth >= 7 && nMonth <= 9){
        		return "03";
        	}
        	else if(nMonth >= 10 && nMonth <= 12){
        		return "04";
        	}

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_TUITION_MASTER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
