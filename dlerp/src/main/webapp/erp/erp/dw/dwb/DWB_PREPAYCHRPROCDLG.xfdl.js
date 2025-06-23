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
            this.set_titletext("선급금관리(담당자처리)");
            this.getSetter("maxwidth").set("410");
            this.getSetter("maxheight").set("420");
            if (Form == this.constructor)
            {
                this._setFormPosition(410,420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">approve_ok</Col><Col id=\"SP\">DWBPR_PREPAY_EXECUTE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SAVE_01</Col></Row><Row><Col id=\"SP\">DWBPR_PREPAYFILE_EXECUTE</Col><Col id=\"TARGET\">exec</Col></Row><Row><Col id=\"TARGET\">fileSelect</Col><Col id=\"SP\">DPGPR_XPREPAYFILE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWBPR_PREPAYFILE_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PROCDIV\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNRSN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_PROCDIV", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_DGR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DGR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileList", this);
            obj._setContents("<ColumnInfo><Column id=\"ADDFILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDFILE_SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_HASH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","30",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","-10","0","102.44%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("선급금담당자처리");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","staTITLE:10","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_HADOCONT","0","staCD_SITE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","staNO_HADOCONT:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("업체코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_SEQ","0","staCD_VENDOR:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("선급금차수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_PROCDIV","0","staNO_SEQ:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("처리구분");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_RTNRSN","0","staCD_PROCDIV:-1","87","70",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("반려사유");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staCD_SITE:-1","staTITLE:10",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staNO_HADOCONT:-1","staBg1:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staCD_VENDOR:-1","staBg2:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staNO_SEQ:-1","staBg3:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5","staCD_PROCDIV:-1","staBg4:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg6","staDS_RTNRSN:-1","staBg5:-1",null,"70","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staCD_SITE:5","staTITLE:15","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","edtCD_SITE:3","staTITLE:15",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_HADOCONT","staNO_HADOCONT:5","edtCD_SITE:9","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_HADOCONT","edtCD_HADOCONT:3","edtCD_SITE:9",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_VENDOR","staCD_VENDOR:5","edtCD_HADOCONT:9","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR","edtCD_VENDOR:3","edtCD_HADOCONT:9",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_SEQ","staCD_VENDOR:5","edtCD_VENDOR:9","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboCD_PROCDIV","staCD_PROCDIV:5","edtNO_SEQ:10","120","19",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsCD_PROCDIV");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtDS_RTNRSN","staDS_RTNRSN:5","ccboCD_PROCDIV:9",null,"60","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","35%","staDS_RTNRSN:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","55%","staDS_RTNRSN:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtCD_SITE","value","dsData","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtDS_SITE","value","dsData","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctclYM_WORK.form.TextBox","value","dsData","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtCD_HADOCONT","value","dsData","NO_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtDS_HADOCONT","value","dsData","DS_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtCD_VENDOR","value","dsData","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtDS_VENDOR","value","dsData","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ccboCD_PROCDIV","value","dsData","CD_PROCDIV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.edtNO_SEQ","value","dsData","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtDS_RTNRSN","value","dsData","DS_RTNRSN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DWB_PREPAYCHRPROCDLG.xfdl", function() {
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

        	this.fnSetCombo();

        	// 이전 화면에서 데이터 받기.
        	this.dsData.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsData.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        	this.dsData.setColumn(0, "NO_HADOCONT", this.getOwnerFrame().NO_HADOCONT);
        	this.dsData.setColumn(0, "DS_HADOCONT", this.getOwnerFrame().DS_HADOCONT);
        	this.dsData.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        	this.dsData.setColumn(0, "DS_VENDOR",  this.getOwnerFrame().DS_VENDOR);
        	this.dsData.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);
        	this.dsData.setColumn(0, "CD_PROCDIV", this.getOwnerFrame().CD_PROCDIV);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
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
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsFileSelect = new Dataset();
        	this.dsFileSelect.addColumn("TY_WRK", "string");
        	this.dsFileSelect.addColumn("CD_VENDOR", "string");
        	this.dsFileSelect.addColumn("CD_SITE", "string");
        	this.dsFileSelect.addColumn("NO_HADOCONT", "string");
        	this.dsFileSelect.addColumn("NO_SEQ", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_WRK", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("NO_HADOCONT", "string");
        	this.dsExecute.addColumn("CD_VENDOR", "string");
        	this.dsExecute.addColumn("NO_SEQ", "string");
        	this.dsExecute.addColumn("CD_DEPT", "string");
        	this.dsExecute.addColumn("NO_SLIP", "string");
        	this.dsExecute.addColumn("DS_RTNRSN", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("NO_CONT", "string");
        	this.dsExec.addColumn("CD_VENDOR", "string");
        	this.dsExec.addColumn("NO_SEQ", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_CONT", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("NO_SEQ", "string");
        	this.dsSave.addColumn("ADDFILE_NO", "int");
        	this.dsSave.addColumn("SEQNO", "int");
        	this.dsSave.addColumn("DS_SIGNVAL", "string");
        	this.dsSave.addColumn("DN_CERTORGNAME", "string");
        	this.dsSave.addColumn("DN_SIGNNAME", "string");
        	this.dsSave.addColumn("DS_HASHVAL", "string");

        	// 본사서명시 넘긴 dataset에 그대로 담아서 리턴.
        	// DS_HASHVAL, DS_SIGNVAL, DN_CERTORGNAME, DN_SIGNNAME 컬럼은 필수.
        	this.dsSign = new Dataset();
        	this.dsSign.addColumn("ADDFILE_NO", "int");
        	this.dsSign.addColumn("SEQNO", "int");
        	this.dsSign.addColumn("DS_HASHVAL", "string");
        	this.dsSign.addColumn("DS_SIGNVAL", "string");
        	this.dsSign.addColumn("DN_CERTORGNAME", "string");
        	this.dsSign.addColumn("DN_SIGNNAME", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /************************************************************************
         * 콤보 이벤트
         ************************************************************************/
         this.fnSetCombo = function()
         {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_MAND", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DW");
        	this.dsCombo.setColumn(0, "CD_TYPE", "45");
        	this.dsCombo.setColumn(0, "YN_USE", "Y");
        	this.dsCombo.setColumn(0, "YN_MAND", "Y");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_PROCDIV=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
         }

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
         		this.divData.form.ccboCD_PROCDIV.set_index(0);
        		//this.dsData.setColumn(0, "NO_DGR", this.getOwnerFrame().NO_DGR);
        	}
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnApproveValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsData.getColumn(0, "DS_RTNRSN")) && this.dsData.getColumn(0, "CD_PROCDIV") == "RTN") {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctxtDS_RTNRSN.setFocus();
        		}
        		this.gfnAlert("반려사유를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "approve") {
        		if(errorCode == 0)
        		{
        			if(this.dsData.getColumn(0, "CD_PROCDIV") == "TRANS"){
        				// 처리구분이 '협럭업체송부'인 경우에만 프로세스 처리
        				this.fnExec();
        			}else{
        				this.fnApprove_callback = function()
        				{
        					this.getParentContext().close(true);
        				}

        				this.gfnAlert(this.divData.form.ccboCD_PROCDIV.text + " 정상 처리되었습니다.", "fnApprove_callback");
        			}
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}else if (svcID == "exec") {
        		if(errorCode == 0)
        		{
        			// Global Dataset 사용이므로 반드시 clearData
        			var dsAutoForm = this.objApp.gdsAutoForm;
        			dsAutoForm.clearData();

        			var nrow = dsAutoForm.addRow();
        			dsAutoForm.setColumn(nrow, "TY_WORK", "DW-03");
        			dsAutoForm.setColumn(nrow, "ATTR01", this.dsData.getColumn(0, "CD_SITE"));
        			dsAutoForm.setColumn(nrow, "ATTR02", this.dsData.getColumn(0, "NO_HADOCONT"));
        			dsAutoForm.setColumn(nrow, "ATTR03", this.dsData.getColumn(0, "CD_VENDOR"));
        			dsAutoForm.setColumn(nrow, "ATTR04", this.dsData.getColumn(0, "NO_SEQ"));
        			dsAutoForm.setColumn(nrow, "ATTR05", "");
        			dsAutoForm.setColumn(nrow, "ATTR06", "");
        			dsAutoForm.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        			this.gfnAutoForm("fnAutoFile_Callback");	// callback 생략가능


        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}else if (svcID == "fileSelect") {
        		this.fnBonsaSign();
        	}else if(svcID == "sign") {
        		if (errorCode == 0) {
        			this.fnSaveSign();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnExecute();

        			//this.gfnAlert("본사서명이 완료되었습니다.");
        			//this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }


        this.fnAutoFile_Callback = function(svcID, errorCode, errorMsg, strArg) {
        	if(errorCode == 0) {
        		this.fnApprove_callback = function()
        		{
        			this.getParentContext().close(true);
        		}

        		this.gfnAlert(this.divData.form.ccboCD_PROCDIV.text + " 정상 처리되었습니다.", "fnApprove_callback");
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	if(!this.fnApproveValidate()) return;

        	// 처리구분이 담당자승인 이면 따로 처리 나머진 같음
        	if(this.dsData.getColumn(0, "CD_PROCDIV") == "APRV"){
        		this.fnFileSelect();
        	}else{
        		this.fnExecute();
        	}
        };

         /*
          *	처리구분이 담당자승인일때 파일관련 조회
          */
        this.fnFileSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.dsFileSelect.clearData();
        	this.dsFileSelect.addRow();

        	this.dsFileSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsFileSelect.setColumn(0, "CD_VENDOR", this.dsData.getColumn(0, "CD_VENDOR"));
        	this.dsFileSelect.setColumn(0, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        	this.dsFileSelect.setColumn(0, "NO_HADOCONT", this.dsData.getColumn(0, "NO_HADOCONT"));
        	this.dsFileSelect.setColumn(0, "NO_SEQ", this.dsData.getColumn(0, "NO_SEQ"));

        	var strSvcId    = "fileSelect";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "fileSelect=dsFileSelect";
        	var outData     = "dsFileList=fileSelect0";
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

        // 확인 처리
        this.fnExecute = function() {

        	this.dsExecute.clearData();
        	var nrow = this.dsExecute.addRow();

        	this.dsExecute.setColumn(nrow, "TY_WRK", this.dsData.getColumn(0, "CD_PROCDIV"));
        	this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExecute.setColumn(nrow, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        	this.dsExecute.setColumn(nrow, "NO_HADOCONT", this.dsData.getColumn(0, "NO_HADOCONT"));
        	this.dsExecute.setColumn(nrow, "CD_VENDOR", this.dsData.getColumn(0, "CD_VENDOR"));
        	this.dsExecute.setColumn(nrow, "NO_SEQ", this.dsData.getColumn(0, "NO_SEQ"));
        	this.dsExecute.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsExecute.setColumn(nrow, "NO_SLIP", "");
        	this.dsExecute.setColumn(nrow, "DS_RTNRSN", this.dsData.getColumn(0, "DS_RTNRSN"));

        	var strSvcId    = "approve";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "approve_ok=dsExecute";
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
         *	서명파일 생성
         */
        this.fnExec = function() {

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "TY_WRK", "CRT");
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExec.setColumn(0, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(0, "NO_CONT", this.dsData.getColumn(0, "NO_HADOCONT"));
        	this.dsExec.setColumn(0, "CD_VENDOR", this.dsData.getColumn(0, "CD_VENDOR"));
        	this.dsExec.setColumn(0, "NO_SEQ", this.dsData.getColumn(0, "NO_SEQ"));

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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

        this.fnBonsaSign = function() {
        	this.dsSign.clearData();
        	for (var i = 0; i < this.dsFileList.rowcount; i++) {
        		var nrow = this.dsSign.addRow();
        		this.dsSign.setColumn(nrow, "ADDFILE_NO", this.dsFileList.getColumn(i, "ADDFILE_NO"));
        		this.dsSign.setColumn(nrow, "SEQNO", this.dsFileList.getColumn(i, "ADDFILE_SEQNO"));
        		this.dsSign.setColumn(nrow, "DS_HASHVAL", this.dsFileList.getColumn(i, "FILE_HASH"));
        	}


        	if (this.dsSign.rowcount == 0){
        		this.gfnAlert("지급요청제출 시에 만 담당자 승인 하실 수 있습니다.", "fnVaidateCallback");
        		return;
        	}

        	var strSvcId    = "sign";
        	var strSvcType  = "pki/sign";
        	var inProc		= "";
        	var inData      = "input=dsSign";
        	var outData     = "dsSign=output0";
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

        this.fnSaveSign = function() {
        	this.dsSave.clearData();
        	for (var i = 0; i < this.dsSign.rowcount; i++) {
        		var nrow = this.dsSave.addRow();
        		this.dsSave.setColumn(nrow, "TY_WRK", "APRV");
        		this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsSave.setColumn(nrow, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        		this.dsSave.setColumn(nrow, "NO_CONT", this.dsData.getColumn(0, "NO_CONT"));
        		this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsData.getColumn(0, "CD_VENDOR"));
        		this.dsSave.setColumn(nrow, "NO_SEQ", this.dsData.getColumn(0, "NO_SEQ"));
        		this.dsSave.setColumn(nrow, "ADDFILE_NO", this.dsSign.getColumn(i, "ADDFILE_NO"));
        		this.dsSave.setColumn(nrow, "SEQNO", this.dsSign.getColumn(i, "SEQNO"));
        		this.dsSave.setColumn(nrow, "DS_SIGNVAL", this.dsSign.getColumn(i, "DS_SIGNVAL"));
        		this.dsSave.setColumn(nrow, "DN_CERTORGNAME", this.dsSign.getColumn(i, "DN_CERTORGNAME"));
        		this.dsSave.setColumn(nrow, "DN_SIGNNAME", this.dsSign.getColumn(i, "DN_SIGNNAME"));
        		this.dsSave.setColumn(nrow, "DS_HASHVAL", this.dsSign.getColumn(i, "DS_HASHVAL"));
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

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.dsData_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "CD_PROCDIV")
        		{
        			if(e.newvalue == "RTN")
        			{
        				this.divData.form.staDS_RTNRSN.set_height(70);
        				this.divData.form.staBg6.set_height(70);
        				this.divData.form.ctxtDS_RTNRSN.set_height(60);

        				this.divData.form.resetScroll();
        			}
        			else
        			{
        				this.divData.form.staDS_RTNRSN.set_height(0);
        				this.divData.form.staBg6.set_height(0);
        				this.divData.form.ctxtDS_RTNRSN.set_height(0);
        				this.dsData.setColumn(0, "DS_RTNRSN", "");

        				this.divData.form.resetScroll();
        			}


        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DWB_PREPAYCHRPROCDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
