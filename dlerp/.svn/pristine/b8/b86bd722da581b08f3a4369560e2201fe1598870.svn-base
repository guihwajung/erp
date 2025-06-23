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
            this.set_titletext("퇴직처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DSAPR_TOJIKUPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TOIJIK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TOIJIK\" type=\"STRING\" size=\"256\"/><Column id=\"GR_JIKMU\" type=\"STRING\" size=\"256\"/><Column id=\"GR_SUNGSIL\" type=\"STRING\" size=\"256\"/><Column id=\"GR_HEAPJO\" type=\"STRING\" size=\"256\"/><Column id=\"RM_KOKWA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EMP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_ID\"/><Col id=\"DT_TOIJIK\"/><Col id=\"DS_TOIJIK\"/><Col id=\"GR_JIKMU\"/><Col id=\"GR_HEAPJO\"/><Col id=\"RM_KOKWA\"/><Col id=\"GR_SUNGSIL\"/><Col id=\"CD_EMP\"/><Col id=\"DS_EMP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGR_JIKMU", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">A</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"VALUE\">B</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">C</Col></Row><Row><Col id=\"CODE\">D</Col><Col id=\"VALUE\">D</Col></Row><Row><Col id=\"CODE\">E</Col><Col id=\"VALUE\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGR_SUNGSIL", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">A</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"VALUE\">B</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">C</Col></Row><Row><Col id=\"CODE\">D</Col><Col id=\"VALUE\">D</Col></Row><Row><Col id=\"CODE\">E</Col><Col id=\"VALUE\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGR_HEAPJO", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">A</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"VALUE\">B</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">C</Col></Row><Row><Col id=\"CODE\">D</Col><Col id=\"VALUE\">D</Col></Row><Row><Col id=\"CODE\">E</Col><Col id=\"VALUE\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("퇴직정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","0","40","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("퇴직일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG","0","staDS_SITE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("퇴직사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVAL","0","staDS_SILHENG:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("직무능력");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM","0","staTY_APPROVAL:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("성실성");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_SITE:-1","40",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staDS_SILHENG:-1","staBg1:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staTY_APPROVAL:-1","staBg2:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staDT_CONFIRM:-1","staBg3:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_TOIJIK","staDS_SILHENG:5","74",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_TOIJIK","staDT_CONFIRM:5","staTY_APPROVAL:-83","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","32.50%","266","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.50%","266","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG00","0","156","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("협조성");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SILHENG00","92","161",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","86","156",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG01","0","185","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("참고사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SILHENG01","92","190",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","86","185",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG02","0","214","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("평가자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SILHENG02","92","219",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg02","86","214",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboGR_JIKMU","92","103","125","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsGR_JIKMU");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboGR_SUNGSIL","92","132","125","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsGR_SUNGSIL");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboGR_HEAPJO","92","161","125","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_innerdataset("dsGR_HEAPJO");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtRM_KOKWA","92","190",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_readonly("false");
            obj.set_maxlength("30");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_EMP","92","219","273","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("26");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divData.form.tclDT_TOIJIK","value","dsData","DT_TOIJIK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtDS_TOIJIK","value","dsData","DS_TOIJIK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.cboGR_JIKMU","value","dsData","GR_JIKMU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cboGR_SUNGSIL","value","dsData","GR_SUNGSIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cboGR_HEAPJO","value","dsData","GR_HEAPJO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtRM_KOKWA","value","dsData","RM_KOKWA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.cfCD_EMP.form.CDTextBox","value","dsData","CD_EMP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.cfCD_EMP.form.DSTextBox","value","dsData","DS_EMP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DSA_EMPLOYEE_LIST_TOJIK.xfdl", function() {
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

        	// 이전 화면에서 데이터 받기.
        	this.dsData.setColumn(0, "NO_ID", this.getOwnerFrame().NO_ID);
        	this.dsData.setColumn(0, "DT_TOIJIK",  this.gfnGetDate());

        	this.dsData.setColumn(0, "CD_EMP", this.AuthClient.ID_USER);
        	this.dsData.setColumn(0, "DS_EMP", this.AuthClient.DS_HNAME);

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
        	//this.dxGrid = this.divData.form.objGrid;
        	this.tclDT_TOIJIK = this.divData.form.tclDT_TOIJIK;
        	this.edtDS_TOIJIK = this.divData.form.edtDS_TOIJIK;
        	this.cboGR_JIKMU = this.divData.form.cboGR_JIKMU;
        	this.cboGR_SUNGSIL = this.divData.form.cboGR_SUNGSIL;
        	this.cboGR_HEAPJO = this.divData.form.cboGR_HEAPJO;
        	this.edtRM_KOKWA = this.divData.form.edtRM_KOKWA;
        	this.cfCD_EMP = this.divData.form.cfCD_EMP;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_EMP.CodeFindName = "DZX_CFUSER";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("NO_ID", "string");
        	this.dsSave.addColumn("DT_TOIJIK", "string");
        	this.dsSave.addColumn("DS_TOIJIK", "string");
        	this.dsSave.addColumn("GR_JIKMU", "string");
        	this.dsSave.addColumn("GR_SUNGSIL", "string");
        	this.dsSave.addColumn("GR_HEAPJO", "string");
        	this.dsSave.addColumn("RM_KOKWA", "string");
        	this.dsSave.addColumn("CD_EMP", "string");
        	this.dsSave.addColumn("DS_EMP", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

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
        	if (svcID == "save") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(true);
        		}else
        		{
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
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	this.dsSave.setColumn(0, "NO_ID", this.dsData.getColumn(0, "NO_ID"));
        	this.dsSave.setColumn(0, "DT_TOIJIK", this.dsData.getColumn(0, "DT_TOIJIK"));
        	this.dsSave.setColumn(0, "DS_TOIJIK", this.dsData.getColumn(0, "DS_TOIJIK"));
        	this.dsSave.setColumn(0, "GR_JIKMU", this.dsData.getColumn(0, "GR_JIKMU"));
        	this.dsSave.setColumn(0, "GR_SUNGSIL", this.dsData.getColumn(0, "GR_SUNGSIL"));
        	this.dsSave.setColumn(0, "GR_HEAPJO", this.dsData.getColumn(0, "GR_HEAPJO"));
        	this.dsSave.setColumn(0, "RM_KOKWA", this.dsData.getColumn(0, "RM_KOKWA"));
        	this.dsSave.setColumn(0, "CD_EMP", this.dsData.getColumn(0, "CD_EMP"));
        	this.dsSave.setColumn(0, "DS_EMP", this.dsData.getColumn(0, "DS_EMP"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]


        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staDS_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DSA_EMPLOYEE_LIST_TOJIK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
