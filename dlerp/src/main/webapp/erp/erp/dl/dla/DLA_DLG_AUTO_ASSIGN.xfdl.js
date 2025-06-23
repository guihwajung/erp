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
            this.getSetter("maxwidth").set("550");
            this.getSetter("maxheight").set("320");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,260);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DRAPR_ASSIGNHOUSE_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BUNYANG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SELECT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MIX\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONTRACTDTL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_HO2\"/><Col id=\"TY_BUNYANG\">3</Col><Col id=\"TY_SELECT\">1</Col><Col id=\"YN_MIX\">N</Col><Col id=\"TY_CONTRACTDTL\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DISTRICT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_BUNYANG", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">임대</Col><Col id=\"CD_CODE\">3</Col></Row><Row><Col id=\"DS_CODE\">분양전환</Col><Col id=\"CD_CODE\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SELECT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">층호별</Col><Col id=\"CD_CODE\">1</Col></Row><Row><Col id=\"DS_CODE\">호별</Col><Col id=\"CD_CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONTRACT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">사용</Col><Col id=\"CD_CODE\">Y</Col></Row><Row><Col id=\"DS_CODE\">미사용</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONTRACTDTL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">일반계약</Col><Col id=\"CD_CODE\">1</Col></Row><Row><Col id=\"DS_CODE\">대물계약</Col><Col id=\"CD_CODE\">2</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">본사명의계약</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">업체명의계약</Col></Row><Row><Col id=\"CD_CODE\">5</Col><Col id=\"DS_CODE\">지인명의계약</Col></Row><Row><Col id=\"CD_CODE\">6</Col><Col id=\"DS_CODE\">부동산</Col></Row><Row><Col id=\"CD_CODE\">7</Col><Col id=\"DS_CODE\">대행계약</Col></Row><Row><Col id=\"CD_CODE\">8</Col><Col id=\"DS_CODE\">환매2차</Col></Row><Row><Col id=\"CD_CODE\">9</Col><Col id=\"DS_CODE\">환매3차</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("동층호 지정");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_font("bold 13px/normal \"Dotum\"");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDONG","0","staTitle:5","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("동");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDONG","staDONG:-1","staTitle:5",null,"30","0%",null,"400",null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_FLOOR","0","staDONG:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("층호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_FLOOR","staNO_FLOOR:-1","staBgDONG:-1",null,"30","0%",null,"400",null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BUNYANG","0","staNO_FLOOR:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_BUNYANG","staTY_BUNYANG:-1","staBgNO_FLOOR:-1",null,"30","0%",null,"400",null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_SELECT","0","staTY_BUNYANG:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("선택");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_SELECT","staTY_SELECT:-1","staBgTY_BUNYANG:-1",null,"30","0%",null,"400",null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_CONTRACT","0","staTY_SELECT:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("겸용여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_CONTRACT","staTY_CONTRACT:-1","staBgTY_SELECT:-1",null,"30","0%",null,"400",null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_CONTRACTDTL","0","staTY_CONTRACT:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("계약상세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_CONTRACTDTL","staTY_CONTRACTDTL:-1","staBgTY_CONTRACT:-1",null,"30","0%",null,"400",null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG1","staDONG:5","staTitle:10","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR1","staNO_FLOOR:5","ctxtNO_DONG1:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_FLOOR1","ctxtNO_FLOOR1:5","ctxtNO_DONG1:5","15","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("층");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO1","staNO_FLOOR1:5","ctxtNO_DONG1:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_HO1","ctxtNO_HO1:5","ctxtNO_DONG1:5","15","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("호");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_FLOOR1_range","staNO_HO1:5","ctxtNO_DONG1:5","15","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR2","staNO_FLOOR1_range:5","ctxtNO_DONG1:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_FLOOR2","ctxtNO_FLOOR2:5","ctxtNO_DONG1:5","15","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("층");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO2","staNO_FLOOR2:5","ctxtNO_DONG1:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_HO2","ctxtNO_HO2:5","ctxtNO_DONG1:5","15","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("호");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoTY_BUNYANG","staTY_BUNYANG:5","ctxtNO_FLOOR1:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsTY_BUNYANG");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_rowcount("0");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoTY_SELECT","staTY_SELECT:5","crdoTY_BUNYANG:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_innerdataset("dsTY_SELECT");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoTY_CONTRACT","staTY_CONTRACT:5","crdoTY_SELECT:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_innerdataset("dsTY_CONTRACT");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_CONTRACTDTL","staTY_CONTRACTDTL:5","crdoTY_CONTRACT:9","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_innerdataset("dsTY_CONTRACTDTL");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","32.5%","staTY_CONTRACTDTL:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","57.5%","staTY_CONTRACTDTL:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ctxtNO_DONG1","value","dsList","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctxtNO_FLOOR1","value","dsList","NO_FLOOR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtNO_HO1","value","dsList","NO_HO1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtNO_FLOOR2","value","dsList","NO_FLOOR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctxtNO_HO2","value","dsList","NO_HO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.crdoTY_BUNYANG","value","dsList","TY_BUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.crdoTY_SELECT","value","dsList","TY_SELECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.crdoTY_CONTRACT","value","dsList","YN_MIX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ccboTY_CONTRACTDTL","value","dsList","TY_CONTRACTDTL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLA_DLG_AUTO_ASSIGN.xfdl", function() {
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
        	this.dsSearch.setColumn(0, "TY_DISTRICT", this.getOwnerFrame().TY_DISTRICT);
        	this.dsSearch.setColumn(0, "RT_OPTION", this.getOwnerFrame().RT_OPTION);

        	//this.divData.form.ccfOPTION.form.DSTextBox.set_width(0);
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

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_ACNTUNIT", "string");
        	this.dsExec.addColumn("TY_GUBUN", "string");
        	this.dsExec.addColumn("NO_CHASU", "string");
        	this.dsExec.addColumn("NO_DONG1", "string");
        	this.dsExec.addColumn("NO_FLOOR1", "string");
        	this.dsExec.addColumn("NO_HO1", "string");
        	this.dsExec.addColumn("NO_FLOOR2", "string");
        	this.dsExec.addColumn("NO_HO2", "string");
        	this.dsExec.addColumn("TY_BUNYANG", "string");
        	this.dsExec.addColumn("NO_SIZE", "bigdecimal");
        	this.dsExec.addColumn("TY_TYPE", "string");
        	this.dsExec.addColumn("TY_DISTRICT", "string");
        	this.dsExec.addColumn("RT_OPTION", "string");
        	this.dsExec.addColumn("TY_SELECT", "string");
        	this.dsExec.addColumn("ID_INSERT", "string");
        	this.dsExec.addColumn("YN_MIX", "string");
        	this.dsExec.addColumn("TY_CONTRACTDTL", "string");
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

        			this.gfnAlert("동층호 자동지정이 정상 처리되었습니다.", "fnExecute_callback");

        		} else {
        			this.gfnAlert(errorMsg);
        		}
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
        this.fnSaveValidate = function()
        {
        	var validate = true;
        	var msg = "";
        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_DONG")))
        	{
        		validate = false;
        		msg += "동을 입력하지 않았습니다. \r\n";
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_FLOOR1")) || this.gfnIsNull(this.dsList.getColumn(0, "NO_HO1"))
        	|| this.gfnIsNull(this.dsList.getColumn(0, "NO_FLOOR2")) || this.gfnIsNull(this.dsList.getColumn(0, "NO_HO2"))
        	)
        	{
        		validate = false;
        		msg += "층호를 입력하지 않았습니다. \r\n";
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "TY_CONTRACTDTL")))
        	{
        		validate = false;
        		msg += "계약상세를 입력하지 않았습니다. \r\n";
        	}

        	if(validate == false)
        	{
        		this.gfnAlert(msg);
        	}

        	return validate;
        }


        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	this.fnExecute();
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.fnExecute = function()
        {
        	this.dsExec.clearData();

        	var nrow = this.dsExec.addRow();

        	this.dsExec.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsExec.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsExec.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsExec.setColumn(nrow, "NO_DONG1", this.dsList.getColumn(0, "NO_DONG"));
        	this.dsExec.setColumn(nrow, "NO_FLOOR1", this.dsList.getColumn(0, "NO_FLOOR1"));
        	this.dsExec.setColumn(nrow, "NO_HO1", this.dsList.getColumn(0, "NO_HO1"));
        	this.dsExec.setColumn(nrow, "NO_FLOOR2", this.dsList.getColumn(0, "NO_FLOOR2"));
        	this.dsExec.setColumn(nrow, "NO_HO2", this.dsList.getColumn(0, "NO_HO2"));
        	this.dsExec.setColumn(nrow, "TY_BUNYANG", this.dsList.getColumn(0, "TY_BUNYANG"));
        	this.dsExec.setColumn(nrow, "NO_SIZE", this.dsSearch.getColumn(0, "NO_SIZE"));
        	this.dsExec.setColumn(nrow, "TY_TYPE", this.dsSearch.getColumn(0, "TY_TYPE"));
        	this.dsExec.setColumn(nrow, "TY_DISTRICT", this.dsSearch.getColumn(0, "TY_DISTRICT"));
        	this.dsExec.setColumn(nrow, "RT_OPTION", this.dsSearch.getColumn(0, "RT_OPTION"));
        	this.dsExec.setColumn(nrow, "TY_SELECT", this.dsList.getColumn(0, "TY_SELECT"));
        	this.dsExec.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsExec.setColumn(nrow, "YN_MIX", this.dsList.getColumn(0, "YN_MIX"));
        	this.dsExec.setColumn(nrow, "TY_CONTRACTDTL", this.dsList.getColumn(0, "TY_CONTRACTDTL"));

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData 		= "execute=dsExec";
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
        this.loadIncludeScript("DLA_DLG_AUTO_ASSIGN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
