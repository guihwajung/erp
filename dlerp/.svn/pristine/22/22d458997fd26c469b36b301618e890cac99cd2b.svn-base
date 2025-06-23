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
            this.set_titletext("안분내역복사");
            this.getSetter("maxwidth").set("500");
            this.getSetter("maxheight").set("300");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,260);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">copy</Col><Col id=\"SP\">DRAPR_SIZEDIV_COPY</Col></Row><Row><Col id=\"TARGET\">copy_nomoney</Col><Col id=\"SP\">DRAPR_SIZEDIV_COPY_NOMONEY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GUN\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_COPY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_COPY\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GUN\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_COPY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">전체</Col><Col id=\"CD_CODE\">A</Col></Row><Row><Col id=\"DS_CODE\">약정분양금제외</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("안분내역복사");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_font("bold 13px/normal \"Dotum\"");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLETop","0","staTITLE:5","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("원본");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTop","0","staTITLETop:0",null,"30","0%",null,"460",null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_SIZE","5","staTITLETop:5","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0.###0");
            obj.set_type("number");
            obj.set_maskchar(" ");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMETER","ctxtNO_SIZE:5","staTITLETop:5","25","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("m²");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_TYPE","staMETER:5","staTITLETop:5","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMSG00","ctxtTY_TYPE:5","staTITLETop:5","55","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("형      군");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtGUN","staMSG00:5","staTITLETop:5","30","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMSG01","ctxtGUN:5","staTITLETop:5","55","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("OPTION");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtOPTION","staMSG01:5","staTITLETop:5","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLEBottom","0","staBgTop:5","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("대상");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgBottom","0","staTITLEBottom:0",null,"30","0%",null,"460",null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_SIZE_BOTTOM","5","staTITLEBottom:5","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0.###0");
            obj.set_type("number");
            obj.set_maskchar(" ");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMETER_BOTTOM","ctxtNO_SIZE_BOTTOM:5","staTITLEBottom:5","25","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("m²");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_TYPE_BOTTOM","staMETER_BOTTOM:5","staTITLEBottom:5","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMSG00_BOTTOM","ctxtTY_TYPE_BOTTOM:5","staTITLEBottom:5","55","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("형      군");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtGUN_BOTTOM","staMSG00_BOTTOM:5","staTITLEBottom:5","30","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMSG01_BOTTOM","ctxtGUN_BOTTOM:5","staTITLEBottom:5","55","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("OPTION");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfOPTION","staMSG01_BOTTOM:5","staTITLEBottom:5","100","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFUNION_SIZEOPTION");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("19");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoTY_COPY","150","staBgBottom:10","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_COPY");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","32.5%","crdoTY_COPY:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","57.5%","crdoTY_COPY:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ctxtNO_SIZE","value","dsSearch","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctxtTY_TYPE","value","dsSearch","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtGUN","value","dsSearch","GUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtOPTION","value","dsSearch","OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctxtNO_SIZE_BOTTOM","value","dsList","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctxtTY_TYPE_BOTTOM","value","dsList","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctxtGUN_BOTTOM","value","dsList","GUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ccfOPTION.form.CDTextBox","value","dsList","OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.crdoTY_COPY","value","dsList","TY_COPY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRA_DLGSIZEDIVCOPY.xfdl", function() {
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
        	this.dsSearch.setColumn(0, "NO_SIZE", this.getOwnerFrame().NO_SIZE);
        	this.dsSearch.setColumn(0, "TY_TYPE", this.getOwnerFrame().TY_TYPE);
        	this.dsSearch.setColumn(0, "GUN", this.getOwnerFrame().GUN);
        	this.dsSearch.setColumn(0, "OPTION", this.getOwnerFrame().OPTION);

        	this.divData.form.ccfOPTION.form.DSTextBox.set_width(0);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	/*this.FormBtns.Select.set_enable(false);*/
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
        	this.divData.form.ccfOPTION.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divData.form.ccfOPTION.AfterCDTextChanged = "fnAfterCDTextChanged";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_ACNTUNIT", "string");
        	this.dsExec.addColumn("TY_GUBUN", "string");
        	this.dsExec.addColumn("NO_CHASU", "string");
        	this.dsExec.addColumn("NO_SIZE", "bigdecimal");
        	this.dsExec.addColumn("TY_TYPE", "string");
        	this.dsExec.addColumn("TY_DISTRICT", "string");
        	this.dsExec.addColumn("RT_OPTION", "string");
        	this.dsExec.addColumn("NO_SIZE_ORIG", "bigdecimal");
        	this.dsExec.addColumn("TY_TYPE_ORIG", "string");
        	this.dsExec.addColumn("TY_DISTRICT_ORIG", "string");
        	this.dsExec.addColumn("RT_OPTION_ORIG", "string");
        	this.dsExec.addColumn("ID_INSERT", "string");
        }
        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "exec") {
        		if (errorCode == 0) {

        			this.fnExecute_callback = function()
        			{
        				this.getParentContext().close(true);
        			}

        			this.gfnAlert("안분내역복사가 정상 처리되었습니다.", "fnExecute_callback");

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfOPTION") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	if(id == "ccfOPTION")
        	{
        		// 코드,명칭 외 추가 컬럼 처리
        		var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능

        		var ds_updept = "";
        		if (arr.length > 0) {
        			this.dsList.setColumn(0, "OPTION", arr[0]["RT_OPTION"]);
        			this.dsList.setColumn(0, "NO_SIZE", arr[0]["NO_SIZE"]);
        			this.dsList.setColumn(0, "TY_TYPE", arr[0]["TY_TYPE"]);
        			this.dsList.setColumn(0, "GUN", arr[0]["TY_DISTRICT"]);
        		}

        		this.ctxtDS_UPDEPT.set_value(ds_updept);
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsList.getColumn(0, "OPTION")))
        	{
        		this.gfnAlert("군옵션을 조회해주세요.");
        		return false;
        	}

        	this.gfnConfirm("안분내역 전체를 복사합니다. 계속 진행하시겠습니까?", "fnExecute");
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.fnExecute = function(strId, val)
        {
        	if(val != true) return;

        	this.dsExec.clearData();
        	var inData = "copy=";
        	if(this.dsList.getColumn(0, "TY_COPY") == "N")
        	{
        		inData = "copy_nomoney="
        	}

        	var nrow = this.dsExec.addRow();

        	this.dsExec.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsExec.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsExec.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsExec.setColumn(nrow, "NO_SIZE", this.dsList.getColumn(0, "NO_SIZE"));
        	this.dsExec.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(0, "TY_TYPE"));
        	this.dsExec.setColumn(nrow, "TY_DISTRICT", this.dsList.getColumn(0, "GUN"));
        	this.dsExec.setColumn(nrow, "RT_OPTION", this.dsList.getColumn(0, "OPTION"));
        	this.dsExec.setColumn(nrow, "NO_SIZE_ORIG", this.dsSearch.getColumn(0, "NO_SIZE"));
        	this.dsExec.setColumn(nrow, "TY_TYPE_ORIG", this.dsSearch.getColumn(0, "TY_TYPE"));
        	this.dsExec.setColumn(nrow, "TY_DISTRICT_ORIG", this.dsSearch.getColumn(0, "GUN"));
        	this.dsExec.setColumn(nrow, "RT_OPTION_ORIG", this.dsSearch.getColumn(0, "OPTION"));
        	this.dsExec.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	    inData 		+= "dsExec";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DRA_DLGSIZEDIVCOPY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
