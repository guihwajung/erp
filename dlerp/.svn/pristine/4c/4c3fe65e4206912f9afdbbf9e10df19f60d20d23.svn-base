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
            this.set_titletext("New Form");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("360");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DWAPR_SILHENGAPPREQ_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">승인</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"VALUE\">취소</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"DS_SITE\"/><Col id=\"NO_SILHENG\"/><Col id=\"DS_SILHENG\"/><Col id=\"RM_BIGO\"/><Col id=\"TY_APPROVAL\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("실행예산 승인요청");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","0","40","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG","0","staDS_SITE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("실행구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVAL","0","staDS_SILHENG:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("승인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_BIGO","0","126","87","70",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
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

            obj = new Static("staBg5","staRM_BIGO:-1","126",null,"70","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staDS_SITE:5","45","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_autoselect("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","edtCD_SITE:1","45",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_autoselect("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_SILHENG","staDS_SILHENG:5","edtDS_SITE:9","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_autoselect("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SILHENG","edtNO_SILHENG:1","edtDS_SITE:9",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_autoselect("false");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoTY_APPROVAL","staTY_APPROVAL:5","staDS_SILHENG:5","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsTY_APPROVAL");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtRM_BIGO","staRM_BIGO:5","131",null,"60","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","35%","staRM_BIGO:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","55%","staRM_BIGO:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtDS_SITE","value","dsData","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtDS_SILHENG","value","dsData","DS_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.crdoTY_APPROVAL","value","dsData","TY_APPROVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctxtRM_BIGO","value","dsData","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtCD_SITE","value","dsData","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtNO_SILHENG","value","dsData","NO_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DWA_SILHENGAPPREQ.xfdl", function() {
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
        	this.dsData.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsData.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        	this.dsData.setColumn(0, "NO_SILHENG", this.getOwnerFrame().NO_SILHENG);
        	this.dsData.setColumn(0, "DS_SILHENG", this.getOwnerFrame().DS_SILHENG);
        	this.dsData.setColumn(0, "CD_RP", this.getOwnerFrame().CD_RP);
        	this.dsData.setColumn(0, "TY_APPROVAL", this.getOwnerFrame().TY_APPROVAL);
        	this.dsData.setColumn(0, "RM_BIGO", this.getOwnerFrame().RM_BIGO);

        	// 라디오 버튼 설정 (승인/반려)
        	this.fnSetRadio();

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
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("NO_SILHENG", "string");
        	this.dsUpdate.addColumn("TY_APPROVAL", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
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

         // 라디오 버튼 설정
         this.fnSetRadio = function()
         {
        	// 라디오 값 세팅 및 폼 초기화
        	this.gfnSetFormStatus(this);
        	this.divData.form.resetScroll();

        	// 라디오 박스 초기값 설정.
        	this.divData.form.crdoTY_APPROVAL.set_value(this.dsData.getColumn(0, "TY_APPROVAL"));

         }

        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	this.dsUpdate.clearData();
        	this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(0, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        	this.dsUpdate.setColumn(0, "NO_SILHENG", this.dsData.getColumn(0, "NO_SILHENG"));
        	this.dsUpdate.setColumn(0, "TY_APPROVAL", this.dsData.getColumn(0, "TY_APPROVAL"));
        	this.dsUpdate.setColumn(0, "RM_BIGO", this.dsData.getColumn(0, "RM_BIGO"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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
            this.divData.form.crdoTY_APPROVAL.addEventHandler("onitemchanged",this.divData_crdoTY_APPROVAL_onitemchanged,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_SILHENGAPPREQ.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
