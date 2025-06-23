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
                this._setFormPosition(350,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DOGPR_SLIPREPLACE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JIPHANG1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JIPHANG2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_ACCOUNT\"/><Col id=\"CD_SITE\"/><Col id=\"CD_DEPT\"/><Col id=\"TY_GUBUN\"/><Col id=\"ID_USER\"/><Col id=\"DT_JIPHANG1\"/><Col id=\"DT_JIPHANG2\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("전표발행");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","0","40","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("전기일자");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_SITE:-1","40",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","32.50%","86","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.50%","86","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT","92","45","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divData.form.ctclDT_ACCOUNT","value","dsData","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DOG_SLIPREPLACE_DT.xfdl", function() {
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

        	this.dsData.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsData.setColumn(0, "CD_DEPT", this.getOwnerFrame().CD_DEPT);
        	this.dsData.setColumn(0, "TY_GUBUN", this.getOwnerFrame().TY_GUBUN);
        	this.dsData.setColumn(0, "ID_USER", this.getOwnerFrame().ID_USER);
        	this.dsData.setColumn(0, "DT_JIPHANG1", this.getOwnerFrame().DT_JIPHANG1);
        	this.dsData.setColumn(0, "DT_JIPHANG2", this.getOwnerFrame().DT_JIPHANG2);
        	this.dsData.setColumn(0, "DT_ACCOUNT",  this.gfnGetDate());
        	this.divData.form.btnOk.setFocus(); // 마감일자에 Focus가 되어있기때문에 마감일자에서 Focus out 시킴
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
        	//this.dxGrid = this.divData.form.objGrid;
        	this.ctclDT_ACCOUNT = this.divData.form.ctclDT_ACCOUNT;
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
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("CD_DEPT", "string");
        	this.dsExecute.addColumn("TY_GUBUN", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("DT_ACCOUNT", "string");
        	this.dsExecute.addColumn("DT_JIPHANG1", "string");
        	this.dsExecute.addColumn("DT_JIPHANG2", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsData.getColumn(0,"DT_ACCOUNT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclDT_ACCOUNT.setFocus();
        		}
        		this.gfnAlert("전기일자는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;

        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "execute") {
        		if (errorCode == 0) {
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("전표발행이 완료되었습니다.", "fnVaidateCallback");

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
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	this.dsExecute.clearData();
        	var nrow = this.dsExecute.addRow();

        	this.dsExecute.setColumn(nrow, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        	this.dsExecute.setColumn(nrow, "CD_DEPT", this.dsData.getColumn(0, "CD_DEPT"));
        	this.dsExecute.setColumn(nrow, "TY_GUBUN", this.dsData.getColumn(0, "TY_GUBUN"));
        	this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExecute.setColumn(nrow, "DT_ACCOUNT", this.dsData.getColumn(0, "DT_ACCOUNT"));
        	this.dsExecute.setColumn(nrow, "DT_JIPHANG1", this.dsData.getColumn(0, "DT_JIPHANG1"));
        	this.dsExecute.setColumn(nrow, "DT_JIPHANG2", this.dsData.getColumn(0, "DT_JIPHANG2"));

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExecute";
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
        this.loadIncludeScript("DOG_SLIPREPLACE_DT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
