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
            this.set_titletext("리스크요청취소");
            this.getSetter("maxwidth").set("410");
            this.getSetter("maxheight").set("365");
            if (Form == this.constructor)
            {
                this._setFormPosition(410,290);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">approve_ok</Col><Col id=\"SP\">DWAPR_RISK_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RISK\" type=\"STRING\" size=\"256\"/><Column id=\"NM_RISK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PROC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNRSN\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_APRVRSTOR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"EP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_PROCDIV", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_DGR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DGR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_DGR\">OMGRREQ</Col><Col id=\"DS_DGR\">승인요청</Col></Row><Row><Col id=\"NO_DGR\">REQCNC</Col><Col id=\"DS_DGR\">요청취소</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","-10","0","102.44%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("리스크 요청/취소");
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
            obj.set_text("리스크번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staEP_NO","0","staNO_HADOCONT:-2","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("전자결재");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_PROCDIV","0","staEP_NO:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("처리구분");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_RTNRSN","0","staEP_NO:28","87","70",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("요청내용");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staCD_SITE:-1","staTITLE:10",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staNO_HADOCONT:-1","staBg1:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3_00","86","97",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5","staCD_PROCDIV:-1","staBg3_00:-1",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg6","staDS_RTNRSN:-1","staBg5:-1",null,"70","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staCD_SITE:5","staTITLE:15","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","edtCD_SITE:3","staTITLE:15",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_RISK","staNO_HADOCONT:5","74","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNM_RISK","edtNO_RISK:3","74",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtDS_RTNRSN","staDS_RTNRSN:5","160",null,"60","4",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","32.44%","staDS_RTNRSN:40","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("확인");
            obj.set_cssclass("btnExt");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.44%","staDS_RTNRSN:40","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("취소");
            obj.set_cssclass("btnExt");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoCD_PROCDIV","92","132","138","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsCD_PROCDIV");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("NO_DGR");
            obj.set_datacolumn("DS_DGR");
            obj.set_enable("true");
            obj.set_text("승인");
            obj.set_value("APRV");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtEP_NO","92","staBg2:2",null,"22","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","228",null,"29","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("* EP의 전자결재번호를 입력하십시오.");
            obj.set_color("blue");
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

            obj = new BindItem("item4","divData.form.edtNO_RISK","value","dsData","NO_RISK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtNM_RISK","value","dsData","NM_RISK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.crdoCD_PROCDIV","value","dsData","CD_PROC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtDS_RTNRSN","value","dsData","REQ_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtEP_NO","value","dsData","EP_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DWA_RISKAPRVREQDLG.xfdl", function() {
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
        	this.dsData.setColumn(0, "NO_RISK", this.getOwnerFrame().NO_RISK);
        	this.dsData.setColumn(0, "NM_RISK", this.getOwnerFrame().NM_RISK);
        	this.dsData.setColumn(0, "CD_PROC", this.getOwnerFrame().CD_PROC)
        	this.dsData.setColumn(0, "BTN_APRVRSTOR", this.getOwnerFrame().BTN_APRVRSTOR);
        	this.dsData.setColumn(0, "REQ_RSN", this.getOwnerFrame().REQ_RSN);
        	this.dsData.setColumn(0, "EP_NO", this.getOwnerFrame().EP_NO);

        	this.fnSetRadio();

        	if(this.dsData.getColumn(0, "BTN_APRVRSTOR") == "Y")
        	{
        		this.divData.form.crdoCD_PROCDIV.set_enable(true);
        	}
        	else
        	{
        		this.divData.form.crdoCD_PROCDIV.set_enable(false);
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Select.set_enable(false);
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

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_WRK", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("NO_RISK", "string");
        	this.dsExecute.addColumn("DS_RTNRSN", "string");
        	this.dsExecute.addColumn("REQ_RSN", "string");
        	this.dsExecute.addColumn("EP_NO", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /************************************************************************
         * 콤보 이벤트
         ************************************************************************/


        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnApproveValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsData.getColumn(0, "EP_NO")) && this.dsData.getColumn(0, "CD_PROC") == "OMGRREQ") {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctxtEP_NO.setFocus();
        		}
        		this.gfnAlert("EP 전자결재번호를 입력하세요.", "fnVaidateCallback");
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
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.

        			this.fnApprove_callback = function()
        			{
        				trace("####### CD_PROC:"+this.dsData.getColumn(0, "CD_PROC"));
        				var rtn = this.dsData.getColumn(0, "CD_PROC");
        				//this.getParentContext().close(true);
        				this.getParentContext().close(rtn);
        			}

        			this.gfnAlert("리스크관리 "+this.divData.form.crdoCD_PROCDIV.text + " 정상 처리되었습니다.", "fnApprove_callback");
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

        	this.divData.form.crdoCD_PROCDIV.set_value(this.dsData.getColumn(0, "CD_PROC"));

        }


        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	if(!this.fnApproveValidate()) return;

        	this.dsExecute.clearData();
        	var nrow = this.dsExecute.addRow();

        	this.dsExecute.setColumn(nrow, "TY_WRK", this.dsData.getColumn(0, "CD_PROC"));
        	this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExecute.setColumn(nrow, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        	this.dsExecute.setColumn(nrow, "NO_RISK", this.dsData.getColumn(0, "NO_RISK"));
        	this.dsExecute.setColumn(nrow, "NM_RISK", this.dsData.getColumn(0, "NM_RISK"));
        	this.dsExecute.setColumn(nrow, "DS_RTNRSN", this.dsData.getColumn(0, "DS_RTNRSN"));

        	this.dsExecute.setColumn(nrow, "REQ_RSN", this.dsData.getColumn(0, "REQ_RSN"));
        	this.dsExecute.setColumn(nrow, "EP_NO", this.dsData.getColumn(0, "EP_NO"));

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


        };

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
        		if(e.columnid == "RSTOR")
        		{
        			if(e.newvalue == "APRV")
        			{
        				this.divData.form.ctxtDS_RTNRSN.set_enable(false);
        				this.divData.form.resetScroll();
        			}
        			else
        			{
        				this.divData.form.ctxtDS_RTNRSN.set_enable(true);
        				this.divData.form.resetScroll();
        			}
        		}
        	}
        };


        this.divData_crdoCD_PROCDIV_onitemchanged = function(obj,e)
        {
        		if(this.dsData.getColumn(0, "CD_PROC") == "APRV")
        	{
        		this.divData.form.ctxtDS_RTNRSN.set_enable(false);
        	}
        	else
        	{
        		this.divData.form.ctxtDS_RTNRSN.set_enable(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divData.form.staTITLE.addEventHandler("onclick",this.divData_staTITLE_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.crdoCD_PROCDIV.addEventHandler("onitemchanged",this.divData_crdoCD_PROCDIV_onitemchanged,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_RISKAPRVREQDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
