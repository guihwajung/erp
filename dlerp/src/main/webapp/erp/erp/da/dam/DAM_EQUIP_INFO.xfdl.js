(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DGA_EQUIP_INFO");
            this.set_titletext("비품등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DAMPR_EQUIP_SELECT</Col><Col id=\"TARGET\">select</Col></Row><Row><Col id=\"SP\">DAMPR_EQUIP_SAVE</Col><Col id=\"TARGET\">save</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_STATE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">양호</Col><Col id=\"DS_CODE\">양호</Col></Row><Row><Col id=\"CD_CODE\">불량</Col><Col id=\"DS_CODE\">불량</Col></Row><Row><Col id=\"CD_CODE\">보관</Col><Col id=\"DS_CODE\">보관</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfoParam", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_EQUIPMENT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staNO_EQUIPMENT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_EQUIPMENT","staNO_EQUIPMENT:0.0","10.0","212","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("150");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAM_EQUIPINFO_CODEFIND");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ccfNO_EQUIPMENT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_GUBUN","staTY_GUBUN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_BUY","0.0","staNO_EQUIPMENT:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("구입일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_BUY_FR","staDT_BUY:0.0","ccfNO_EQUIPMENT:10.0","98","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","calDT_BUY_FR:0.0","ccfNO_EQUIPMENT:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_BUY_TO","staCD_TILDE:0.0","ccfNO_EQUIPMENT:10.0","94","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","staTY_GUBUN:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","ccfTY_GUBUN:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_STATE","ccfCD_CORP:0.0","staNO_EQUIPMENT:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDS_STATE","staTY_STATE:0.0","staNO_EQUIPMENT:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsDS_STATE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.getSetter("BeforeUserDataSetParam").set("fnGrid_BeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnGrid_AfterCDTextChanged");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ccfNO_EQUIPMENT.form.CDTextBox","value","dsSearch","NO_EQUIPMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfTY_GUBUN.form.CDTextBox","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfTY_GUBUN.form.DSTextBox","value","dsSearch","DS_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.calDT_BUY_FR","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.calDT_BUY_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboDS_STATE","value","dsSearch","DS_STATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAM_EQUIP_INFO.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        //this.fileuploads = {};

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
        	//구입일
        	this.calDT_BUY_FR.set_value(today.substring(0,6)+"01");
        	this.calDT_BUY_TO.set_value(this.gfnGetLastDate(today));

        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP) ;
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP) ;

        	this.cboDS_STATE.set_index(0);
        	this.ccfNO_EQUIPMENT.form.DSTextBox.set_visible(false);

        	//this.FormBtns.Select.click(true);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnDetail = this.gfnFormButtonAdd("Detail", "fnDetail", "상세내용");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfNO_EQUIPMENT = this.divSearch.form.ccfNO_EQUIPMENT;
        	this.ccfTY_GUBUN = this.divSearch.form.ccfTY_GUBUN;
        	this.calDT_BUY_FR = this.divSearch.form.calDT_BUY_FR;
        	this.calDT_BUY_TO = this.divSearch.form.calDT_BUY_TO;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.cboDS_STATE = this.divSearch.form.cboDS_STATE;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;


        	//파일
        	//this.fileConfig = this.gfnGetFileConfig();

        	//파일 업다운 경로 정보
        	//this.fnInfo();
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_EQUIPMENT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_EQUIPMENT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfTY_GUBUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfTY_GUBUN.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";


        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAM_EQUIP_INFO");

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 코드파인드 값 변경
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	// BUTTON, BUTTON-IN 처리
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        	// 셀 변경 후 이벤트
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_EQUIPMENT", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("DS_STATE", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("NO_EQUIPMENT", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("CD_PRODUCT", "string");
        	this.dsSave.addColumn("CD_UNIT", "string");
        	this.dsSave.addColumn("NO_SERIAL", "string");
        	this.dsSave.addColumn("DT_BUY", "string");
        	this.dsSave.addColumn("DS_STATE", "string");
        	this.dsSave.addColumn("DT_DISUSE", "string");
        	this.dsSave.addColumn("YN_DISUSE", "string");
        	this.dsSave.addColumn("DT_DISUSE_APP", "string");
        	this.dsSave.addColumn("DS_BUYSTORE", "string");
        	this.dsSave.addColumn("AM_BUY", "bigdecimal");
        	this.dsSave.addColumn("DT_INCOME", "string");
        	this.dsSave.addColumn("CD_CORP_IN", "string");
        	this.dsSave.addColumn("CD_SITE_IN", "string");
        	this.dsSave.addColumn("ID_MANAGER_FIRST", "string");
        	this.dsSave.addColumn("ID_MANAGER_SECOND", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("ID_USER", "string");


        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValid()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_EQUIPMENT", this.dsSearch.getColumn(0, "NO_EQUIPMENT"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "DS_STATE", this.dsSearch.getColumn(0, "DS_STATE"));

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
        };

        this.fnSelectValid = function(){
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        		this.fnValidCallBack = function(){
        			this.ccfCD_CORP.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요", "fnValidCallBack");
        		return false;
        	}
        	return true;
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsList.setColumn(nrow, "DS_CORP", this.dsSearch.getColumn(0, "DS_CORP"));
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var rows = this.dxGrid.getSelectedDatasetRows();
        	if(rows.length > 0) {
        		for(var i =0; i < rows.length; i++) {
        			var nrow = rows[i];

        trace("FILE_CNT", this.gfnNvl(this.dsList.getColumn(nrow, "FILE_CNT"), 0));

        			if(this.gfnNvl(this.dsList.getColumn(nrow, "FILE_CNT"), 0) > 0){
        				this.gfnAlert("첨부파일 먼저 삭제하세요!");
        				return;
        			}
        		}
        	}
        	this.gfnGridDel(this.dxGrid);
        };

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
        				this.dsSave.setColumn(nrow, "NO_EQUIPMENT", this.dsList.getColumn(i, "NO_EQUIPMENT"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsSave.setColumn(nrow, "CD_PRODUCT", this.dsList.getColumn(i, "CD_PRODUCT"));
        				this.dsSave.setColumn(nrow, "CD_UNIT", this.dsList.getColumn(i, "CD_UNIT"));
        				this.dsSave.setColumn(nrow, "NO_SERIAL", this.dsList.getColumn(i, "NO_SERIAL"));
        				this.dsSave.setColumn(nrow, "DT_BUY", this.dsList.getColumn(i, "DT_BUY"));
        				this.dsSave.setColumn(nrow, "DS_STATE", this.dsList.getColumn(i, "DS_STATE"));
        				this.dsSave.setColumn(nrow, "DT_DISUSE", this.dsList.getColumn(i, "DT_DISUSE"));
        				this.dsSave.setColumn(nrow, "YN_DISUSE", this.dsList.getColumn(i, "YN_DISUSE"));
        				this.dsSave.setColumn(nrow, "DT_DISUSE_APP", this.dsList.getColumn(i, "DT_DISUSE_APP"));
        				this.dsSave.setColumn(nrow, "DS_BUYSTORE", this.dsList.getColumn(i, "DS_BUYSTORE"));
        				this.dsSave.setColumn(nrow, "AM_BUY", this.dsList.getColumn(i, "AM_BUY"));
        				this.dsSave.setColumn(nrow, "DT_INCOME", this.dsList.getColumn(i, "DT_INCOME"));
        				this.dsSave.setColumn(nrow, "CD_CORP_IN", this.dsList.getColumn(i, "CD_CORP_IN"));
        				this.dsSave.setColumn(nrow, "CD_SITE_IN", this.dsList.getColumn(i, "CD_SITE_IN"));
        				this.dsSave.setColumn(nrow, "ID_MANAGER_FIRST", this.dsList.getColumn(i, "ID_MANAGER_FIRST"));
        				this.dsSave.setColumn(nrow, "ID_MANAGER_SECOND", this.dsList.getColumn(i, "ID_MANAGER_SECOND"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	//var outData     = "dsOutput=save";
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
        };

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

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        // 	else if (svcID == "fileinfo") {
        // 		if(this.dsInfo.rowcount == 0) {
        // 			this.gfnAlert("[" + this.dsInfoParam.getColumn(0, "CD_GUBUN") + "] 설정값이 없습니다.");
        // 			return;
        // 		}else{
        // 			this.fileConfig.allowTypes = ["jpg","jpeg","gif","png","xls","doc","hwp","pdf","xlsx","ppt", "pptx"]; // 넥사브라우저 전용, 웹은 적용불가
        // 			this.fileConfig.uploadUrl = this.fileConfig.uploadUrl.replace("path=", "path=" + this.dsInfo.getColumn(0, "DS_PATH"));
        // 			this.fileConfig.downloadUrl = "/file/downloadFile.do";
        // 		}
        // 	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         //코드 파인드
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	switch(id) {
        		case "ccfNO_EQUIPMENT": // 관리번호
        			break;
        		case "ccfTY_GUBUN": // 구분
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "M1");
        			break;
        		case "ccfCD_CORP": // 법인
        			break;
        		default:
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	//관리번호
        	if(id == "ccfNO_EQUIPMENT"){
        		if(arr.length >0){
        			if(this.ccfCD_CORP.enable){
        				this.dsSearch.setColumn(0, "CD_CORP", arr[0]["CD_CORP"]);
        				this.dsSearch.setColumn(0, "DS_CORP", arr[0]["DS_CORP"]);
        			}
        			this.dsSearch.setColumn(0, "TY_GUBUN", arr[0]["TY_GUBUN"]);
        			this.dsSearch.setColumn(0, "DS_GUBUN", arr[0]["DS_GUBUN"]);
        		}
        	}
        };



        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	//trace("fnGrid_BeforeUserDataSetParam>>", id, nrow);

        	switch(id) {
        		case "DAX_CFCORP": //법인
        			break;

        		case "M1": // 구분

        			dsUserParam.setColumn(nrow, "CD_PREFIX", "M1");
        			break;

        		case "M2": // 품명
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "M2");
        			dsUserParam.setColumn(nrow, "CD_UPPREFIX", this.dsList.getColumn(this.dsList.rowposition,"TY_GUBUN")); //구분값
        			break;

        		case "M3": // 규격
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "M3");
        			dsUserParam.setColumn(nrow, "CD_UPPREFIX", this.dsList.getColumn(this.dsList.rowposition,"CD_PRODUCT")); //품명
        			break;

        		case "DAX_CFCORP_IN": //전입법인
        			break;

        		case "DAX_CFDEPT": // 전입부서
        			var sCD_CORP = this.dsList.getColumn(this.dsList.rowposition,"CD_CORP");
        			if (this.gfnIsNull(sCD_CORP)) {
        				this.gfnAlert("법인을 먼저 입력하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "N");
        			break;

        		case "DAX_CFBASEINFO_DEPT": // 관리책임자 정
        			var sCD_CORP_IN = this.dsList.getColumn(this.dsList.rowposition,"CD_CORP_IN");
        			if (this.gfnIsNull(sCD_CORP_IN)) {
        				this.gfnAlert("전입법인을 먼저 입력하세요.");
        				return false;
        			}
        			var sCD_SITE_IN = this.dsList.getColumn(this.dsList.rowposition,"CD_SITE_IN");
        			if (this.gfnIsNull(sCD_SITE_IN)) {
        				this.gfnAlert("전입부서를 먼저 입력하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP_IN);	//전입법인코드
        			dsUserParam.setColumn(nrow, "CD_DEPT", sCD_SITE_IN);	//전입부서코드
        			break;
        		case "DAX_CFBASEINFO_DEPT_SUB": // 관리책임자 부
        			var sCD_CORP_IN = this.dsList.getColumn(this.dsList.rowposition,"CD_CORP_IN");
        			if (this.gfnIsNull(sCD_CORP_IN)) {
        				this.gfnAlert("전입법인을 먼저 입력하세요.");
        				return false;
        			}
        			var sCD_SITE_IN = this.dsList.getColumn(this.dsList.rowposition,"CD_SITE_IN");
        			if (this.gfnIsNull(sCD_SITE_IN)) {
        				this.gfnAlert("전입부서를 먼저 입력하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP_IN);	//전입법인코드
        			dsUserParam.setColumn(nrow, "CD_DEPT", sCD_SITE_IN);	//전입부서코드
        			break;

        		default:
        	}

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        };

        //파일 업로드
        this.fnGrid_ExpandUp = function(obj, e){

        	var colId = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	switch(colId){
        // 		case "DS_FILE_NAME": //싱글 업로드
        // 			if(this.gfnGetFlag(this.dsList, e.row) == "I"){
        // 				this.gfnAlert("저장 후 파일첨부를 진행하세요.");
        // 				return false;
        // 			}else{
        // 				this.fnGridSingleFileUpload();
        // 			}
        // 			break;
        		case "FILE_ATTACH":	//멀티 업로드

        			// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        			// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        			if(this.gfnGetFlag(this.dsList, e.row) == "I"){
        				this.gfnAlert("저장 후 파일첨부를 진행하세요.");
        				return false;
        			}

        			var fileManager = {};
        			fileManager.CD_GUBUN = "DAM1";
        			fileManager.CD_DIR = [ this.dsList.getColumn(this.dsList.rowposition, "NO_EQUIPMENT")];
        			// CD_DIR 만 지정시 CD_DIR 배열 순대로 키1,키2,키3 까지 자동지정
        			// 저장되는 디렉토리와 키값이 다른경우 CD_REF 추가로 사용
        			//fileManager.CD_REF = [ "A1" ];
        			// 권한 및 상태에 따라 업로드,삭제 가능여부 지정 (기본: true)
        			fileManager.IS_READONLY = false;

        			this.gfnFileManager(fileManager, "fnFileCallback");
        			break;

        		default:
        	}
        };

        this.fnFileCallback = function(strID, val) {
        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(this.dsList.rowposition, "FILE_CNT", val.Cnt);
        	if(val.Cnt == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_ATTACH", "첨부");
        	} else {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_ATTACH", "첨부(" + val.Cnt + ")");
        	}
        	this.dsList.set_enableevent(true);
        };

        this.fnGrid_AfterEdit = function(obj,e) {

        	if(e.oldvalue != e.newvalue) {
        		if(e.columnid == "TY_GUBUN" || e.columnid == "DS_GUBUN") { //구분
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_PRODUCT", ""); //품명
        			this.dsList.setColumn(this.dsList.rowposition, "DS_PRODUCT", "");
        			this.dsList.setColumn(this.dsList.rowposition, "CD_UNIT", ""); //규격
        			this.dsList.setColumn(this.dsList.rowposition, "DS_UNIT", "");
        			this.dsList.set_enableevent(true);
        		}
        		if(e.columnid == "CD_PRODUCT" || e.columnid == "DS_PRODUCT") { //품명
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_UNIT", ""); //규격
        			this.dsList.setColumn(this.dsList.rowposition, "DS_UNIT", "");
        			this.dsList.set_enableevent(true);
        		}
        	}
        }


        //
        // //파일 다운로드
        // this.divData_objGrid_oncelldblclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        // {
        // 	var colId = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        // 	switch(colId){
        // 		case "DS_FILE_NAME":
        // 			if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "DS_FILE_NAME"))) { return false; }
        //
        // 			var sFilename = this.dsList.getColumn(this.dsList.rowposition, "DS_FILE_NAME");
        // 			var encodeFileName = encodeURIComponent(sFilename);
        //
        // 			var svrPath = this.dsList.getColumn(this.dsList.rowposition, "DS_FILE_PATH").replace(/\//g, "\\") + "\\";
        // 			var filePath = svrPath.replace(/\\\\/g, "\\");
        //
        // 			var surl = this.fileConfig.host+ this.fileConfig.downloadUrl;
        // 			this.FileDownTransfer00.set_url(surl);
        // 			this.FileDownTransfer00.setPostData("path", filePath);
        // 			this.FileDownTransfer00.setPostData("fileName", sFilename);
        //
        // 			if( system.navigatorname =="nexacro"){
        // 				this.FileDownTransfer00.set_downloadfilename(sFilename);
        // 			}
        //
        // 			this.FileDownTransfer00.download();
        //
        // 			break;
        // 		case "DS_FILE_PATH_ETC":
        //
        // 			break;
        //
        // 		default:
        // 	}
        //};
        //
        // //그리드 싱글 파일 업로드
        // this.fnGridSingleFileUpload = function(obj:nexacro.Button, e:nexacro.ClickEventInfo){
        //
        // 	var fileid = this.dsList.getColumn(this.dsList.rowposition, "NO_EQUIPMENT");
        //
        // 	this.fileup = new FileUpload();
        // 	this.fileup.init(fileid, 0,0,0,0);
        //
        // 	if(this.lookup(fileid)) {
        //  		delete this.fileuploads[fileid];
        //  		this.removeChild(fileid);
        //  	}
        //
        // 	this.addChild(fileid, this.fileup);
        // 	this.fileup.show();
        // 	this.fileup.row = 0;
        // 	this.fileup.addEventHandler("onitemchanged", this.fileup_onitemchanged, this);
        // 	this.fileup.addEventHandler("onsuccess", this.fileup_onsuccess, this);
        // 	this.fileup.addEventHandler("onerror", this.fileup_onerror, this);
        //
        // 	this.fileup.filefindbuttons.upfile0.click();
        // };
        //
        // this.fileup_onitemchanged = function(obj:nexacro.FileUpload,e:nexacro.FileUploadItemChangeEventInfo) {
        // 	if(obj.filelist.length > 0) {
        //
        // 		var filename = obj.filelist[0].filename;
        // 		var fileext = filename.toLocaleLowerCase().substring(filename.lastIndexOf('.')+1);
        //
        // 		this.fileConfig.allowTypes = ["jpg","jpeg","gif","png","bmp"];
        //  		if(!this.gfnIsExistInArray(this.fileConfig.allowTypes, fileext)) {
        //  			this.gfnAlert("지원하지 않는 형식의 파일입니다.");
        //  			return;
        //  		}
        //
        // 		var sFilePath = this.fileup.value;
        // 		var dirExpt = sFilePath.lastIndexOf("\\")+1;
        // 		var sFileName = sFilePath.substr(dirExpt);
        //
        // 		var key = this.dsList.getColumn(this.dsList.rowposition, "NO_EQUIPMENT")+"/CARD";
        // 		var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl + key;
        //
        // 		this.fileup.upload(sUploadUrl);
        // 		this.filepath = this.dsInfo.getColumn(0, "DS_PATH");
        //
        // 		this.dsList.setColumn(this.dsList.rowposition, "DS_FILE_NAME", obj.filelist[0].filename);
        // 		this.dsList.setColumn(this.dsList.rowposition, "DS_FILE_PATH", this.filepath + key);
        // 		//this.dsList.setColumn(this.dsList.rowposition, "DS_FILESIZE", obj.filelist[0]._handle["size"]);
        // 	}
        // };
        //
        // this.fileup_onsuccess = function(obj:nexacro.FileUpload,e:nexacro.FileUploadEventInfo) {
        // 	//trace(e.errorcode+"::"+e.errormsg);
        // };
        //
        // this.fileup_onerror = function(obj:nexacro.FileUpload,e:nexacro.FileUploadErrorEventInfo) {
        // 	//trace(e.errorcode+"::"+e.errormsg);
        // };
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
         /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // //파일 저장 경로 조회
        // this.fnInfo = function() {
        //
        // 	this.dsInfoParam.clearData();
        // 	this.dsInfoParam.addRow();
        //
        // 	this.dsInfoParam.setColumn(0, "CD_GUBUN", "DG01");
        //
        // 	var strSvcId    = "fileinfo";
        // 	var strSvcType  = "select";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "fileinfo=dsInfoParam";
        // 	var outData     = "dsInfo=fileinfo0";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        // };


        // // 상세내용
        // this.fnDetail = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	// 선택된 row가 있을 경우에만 팝업을 띄움
        // 	if (!this.gfnGridIsRow(this.dxGrid)) {
        // 		return false;
        // 	}
        //
        // 	var param = {};
        // 	param.NO_EQUIPMENT = this.dsList.getColumn(this.dsList.rowposition, "NO_EQUIPMENT");
        //
        // 	trace("param.NO_EQUIPMENT :: " + param.NO_EQUIPMENT);
        //
        // 	var nwidth = 1180;
        // 	var nheight = 400;
        // 	// 화면 오픈.
        // 	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        // 	// 타 모듈 화면 호출시 지정할것.
        //
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DGA_EQUIP_DLG", "fnPopCallBack", param, nwidth, nheight);
        // }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.calDT_BUY_FR.addEventHandler("onchanged",this.fnAfterCDTextChanged,this);
            this.divSearch.form.calDT_BUY_TO.addEventHandler("onchanged",this.fnAfterCDTextChanged,this);
            this.divSearch.form.cboDS_STATE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAM_EQUIP_INFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
