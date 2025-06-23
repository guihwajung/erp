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
            if (Form == this.constructor)
            {
                this._setFormPosition(400,280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCDPR_EVALUEMAGAM_DAMDANG_SITE_ALL_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_DAM_01\" type=\"STRING\" size=\"256\"/><Column id=\"ID_DAM_02\" type=\"STRING\" size=\"256\"/><Column id=\"ID_DAM_03\" type=\"STRING\" size=\"256\"/><Column id=\"ID_DAM_04\" type=\"STRING\" size=\"256\"/><Column id=\"ID_DAM_05\" type=\"STRING\" size=\"256\"/><Column id=\"YN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SYSTEM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_SEQ", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">001</Col><Col id=\"DS_CODE\">1/4분기</Col></Row><Row><Col id=\"CD_CODE\">002</Col><Col id=\"DS_CODE\">2/4분기</Col></Row><Row><Col id=\"CD_CODE\">003</Col><Col id=\"DS_CODE\">3/4분기</Col></Row><Row><Col id=\"CD_CODE\">004</Col><Col id=\"DS_CODE\">4/4분기</Col></Row><Row><Col id=\"CD_CODE\">005</Col><Col id=\"DS_CODE\">전반기</Col></Row><Row><Col id=\"CD_CODE\">006</Col><Col id=\"DS_CODE\">후반기</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("평가담당자 일괄지정");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYR_MAGAM","0","35","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","64","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_DAM01","0","91","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현장소장");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_DAM02","0","120","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("공사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_DAM03","0","149","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("CM");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_DAM04","0","178","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("안전");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_DAM05","0","207","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("관리");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","86","35",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","86","64",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","86","91",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","86","120",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5","86","149",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg6","86","178",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg7","86","207",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYR_MAGAM","92","40","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboNO_SEQ","295","10","47","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsNO_SEQ");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","92","68","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            obj.getSetter("FitToContents").set("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_DAM01","92","96","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_DAM02","92","126","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_DAM03","92","155","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_DAM04","92","184","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_DAM05","92","213","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","80","staID_DAM05:15","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("담당자일괄지정");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","220","staID_DAM05:15","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SEQ","165","40","177","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ctclYR_MAGAM.form.TextBox","value","dsData","YR_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccboNO_SEQ","value","dsData","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccfCD_SITE.form.CDTextBox","value","dsData","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfID_DAM01.form.CDTextBox","value","dsData","ID_DAM_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfID_DAM02.form.CDTextBox","value","dsData","ID_DAM_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ccfID_DAM03.form.CDTextBox","value","dsData","ID_DAM_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccfID_DAM04.form.CDTextBox","value","dsData","ID_DAM_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ccfID_DAM05.form.CDTextBox","value","dsData","ID_DAM_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtDS_SEQ","value","dsData","DS_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCD_EVALUEMAGAM_SITE_ALL_CHG.xfdl", function() {
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
        	this.dsData.setColumn(0, "YR_MAGAM", this.getOwnerFrame().YR_MAGAM);
        	this.dsData.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);
        	this.dsData.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsData.setColumn(0, "YN_FLAG",  this.getOwnerFrame().YN_FLAG);
        	this.dsData.setColumn(0, "DS_SEQ",  this.getOwnerFrame().DS_SEQ);
        	this.dsData.setColumn(0, "TY_SYSTEM",  this.getOwnerFrame().TY_SYSTEM);

        	this.divData.form.ccfCD_SITE.form.fnCodeFindLoad();

        // 	if(this.dsData.getColumn(0, "YN_FLAG") != "Y" && this.dsData.getColumn(0, "YN_FLAG") != "1")
        // 	{
        // 		this.divData.form.ccfID_DAM04.set_enable(false);
        // 	}
        	if(this.dsData.getColumn(0, "TY_SYSTEM") == "SF") {
        		this.divData.form.ccfID_DAM01.set_enable(false);
        		this.divData.form.ccfID_DAM02.set_enable(false);
        		this.divData.form.ccfID_DAM03.set_enable(false);
        		this.divData.form.ccfID_DAM05.set_enable(false);
        	} else if(this.dsData.getColumn(0, "TY_SYSTEM") == "DM") {
        		this.divData.form.ccfID_DAM01.set_enable(false);
        		this.divData.form.ccfID_DAM02.set_enable(false);
        		this.divData.form.ccfID_DAM03.set_enable(false);
        		this.divData.form.ccfID_DAM04.set_enable(false);
        	} else {
        		this.divData.form.ccfID_DAM04.set_enable(false);
        		this.divData.form.ccfID_DAM05.set_enable(false);
        	}
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
        	this.dsUpdate.addColumn("YR_MAGAM", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "string");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("ID_DAM_01", "string");
        	this.dsUpdate.addColumn("ID_DAM_02", "string");
        	this.dsUpdate.addColumn("ID_DAM_03", "string");
        	this.dsUpdate.addColumn("ID_DAM_04", "string");
        	this.dsUpdate.addColumn("ID_DAM_05", "string");
        	this.dsUpdate.addColumn("TY_SYSTEM", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function()
        {
        	var validate = true;

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
        	if (svcID == "save") {
        		if(errorCode == 0)
        		{
        			this.fnCallback_callback = function()
        			{
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("담당자가 정상변경되었습니다.","fnCallback_callback");
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

        this.fnSave = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsUpdate.clearData();
        		var nrow = this.dsUpdate.addRow();
        		this.dsUpdate.setColumn(nrow, "YR_MAGAM", this.dsData.getColumn(0, "YR_MAGAM"));
        		this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsData.getColumn(0, "NO_SEQ"));
        		this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        		this.dsUpdate.setColumn(nrow, "ID_DAM_01", this.dsData.getColumn(0, "ID_DAM_01"));
        		this.dsUpdate.setColumn(nrow, "ID_DAM_02", this.dsData.getColumn(0, "ID_DAM_02"));
        		this.dsUpdate.setColumn(nrow, "ID_DAM_03", this.dsData.getColumn(0, "ID_DAM_03"));
        		this.dsUpdate.setColumn(nrow, "ID_DAM_04", this.dsData.getColumn(0, "ID_DAM_04"));
        		this.dsUpdate.setColumn(nrow, "ID_DAM_05", this.dsData.getColumn(0, "ID_DAM_05"));
        		this.dsUpdate.setColumn(nrow, "TY_SYSTEM", this.dsData.getColumn(0, "TY_SYSTEM"));

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
        	}
        }

        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        //	if(!this.fnSaveValidate()) return false;
        	this.gfnConfirm("담당자 일괄지정을 진행하시겠습니까?", "fnSave");

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
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
            this.dsNO_SEQ.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCD_EVALUEMAGAM_SITE_ALL_CHG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
