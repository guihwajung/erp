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
                this._setFormPosition(600,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DODPR_OBTAIN_ORDER_HIS_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_TEMPSITE\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_TEMPSITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_TEMPSITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HIS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HIS\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INSERT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("변경이력내용 입력");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT","0","29","87","361",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("이력내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM","0","staDS_CONTENT:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVAL","0","staDT_CONFIRM:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("최종수정일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staDS_CONTENT:-1","29",null,"361","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staDT_CONFIRM:-1","staBg2:-1",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staTY_APPROVAL:-1","staBg3:-1",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_HNAME","92","staBg2:4",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDT_UPDATE","92","staBg3:4",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("edtDS_HIS","92","35",null,"349","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_autoselect("false");
            obj.set_accessibilitydesclevel("all");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"4","60","22","6",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("닫기");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSaveA",null,"4","60","22","btnClose:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("저장");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnFileAttach",null,"4","70","22","btnSaveA:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("첨부파일");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divData.form.edtDS_HNAME","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtDT_UPDATE","value","dsList","DT_UPDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtDS_HIS","value","dsList","DS_HIS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZE_OBTAIN_ORDER_HIS.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_TEMPSITE) && !this.gfnIsNull(this.getOwnerFrame().NO_HIS) ) {
        		this.divData.form.btnSaveA.set_enable(false);
        		this.divData.form.edtDS_HIS.set_enable(false);

        		this.dsSearch.setColumn(0, "CD_TEMPSITE", this.getOwnerFrame().CD_TEMPSITE);
        		this.dsSearch.setColumn(0, "NO_HIS", this.getOwnerFrame().NO_HIS);
        		this.FormBtns.Select.click();
        	} else {
        		this.fnAdd();
        		this.divData.form.btnFileAttach.set_enable(false);
        	}

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
        	//this.btnA = this.gfnFormButtonAdd("btnA", "fnSave");
        	//this.btnB = this.gfnFormButtonAdd("btnB", "fnClose");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.NO_HIS = this.divData.form.NO_HIS;

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

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_TEMPSITE", "string");
        	this.dsSelect.addColumn("NO_HIS", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_TEMPSITE", this.dsSearch.getColumn(0, "CD_TEMPSITE"));
        	this.dsSelect.setColumn(0, "NO_HIS", this.dsSearch.getColumn(0, "NO_HIS"));

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



        /*
         *   입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnSetFormStatus(this, "I");
        }


        /*
        	저장
        */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	//if (!this.gfnGridValidate(this.dxGrid)) return;
        	if(!this.fnSaveValidate()) return;

        	this.dsSave.clearData();
        }


        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {

        	return true;
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		if(this.dsList.rowcount > 0) {
        			if(this.dsList.getColumn(0, "YN_POPUP") == 1) {

        			} else {
        				this.divData.form.divYN_POPUP.set_enable(false);
        			}
        		}
        	}
         	else if (svcID == "save") {
         		switch(this.gfnGetFormStatus(this))
        		{
        			case "I" :
        				//저장 후 삭제 버튼 활성화
        				//this.FormBtns.Del.set_enable(true);
        				this.gfnAlert("입력이 완료되었습니다.", "fnClose_callback");
        				//this.FormBtns.Select.click();

        				if( !this.gfnGetFormStatus(this) == "I" && !this.gfnGetFormStatus(this) == "U"){

        				}
        				break;
        			case "U" :
        				//저장 후 삭제 버튼 활성화
        				//this.FormBtns.Del.set_enable(true);
        				//this.gfnAlert("저장이 완료되었습니다.");
        				this.FormBtns.Select.click();
        				break;
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


        this.fnFileCallback = function() {
        	this.fnSelect();
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		if(!this.gfnIsNull(this.dsList.getColumn(0, "NO_HIS"))) {
        			this.gfnSetFormStatus(this, "U");
        		} else {
        			this.gfnSetFormStatus(this, "I");
        		}
        	}
        };

        this.divData_btnClose_onclick = function(obj,e)
        {
        	this.getParentContext().close();
        };


        this.divData_btnSaveA_onclick = function(obj,e)
        {

        	var strDsHis = this.dsList.getColumn(0, "DS_HIS")
        	if(this.gfnIsNull(strDsHis) ) {
        		this.gfnAlert("입력된 내용이 없습니다.");
        	}

        	this.getParentContext().close(strDsHis);
        };

        //첨부파일 셋팅.
        this.divData_btnFileAttach_onclick = function(obj,e)
        {
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DZ10";
        	fileManager.CD_DIR = [this.dsList.getColumn(0, "CD_TEMPSITE"), this.dsList.getColumn(0, "NO_HIS")];
        	fileManager.IS_READONLY = false;

        	this.gfnFileManager(fileManager, "fnOpenFileManager_callback");
        };


        //그리드 첨부 재조회
         this.fnOpenFileManager_callback = function()
         {
        	//this.fnSelect();
        	this.FormBtns.Select.click();
         }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staDT_CONFIRM.addEventHandler("onclick",this.divData_staTY_APPROVAL_onclick,this);
            this.divData.form.btnClose.addEventHandler("onclick",this.divData_btnClose_onclick,this);
            this.divData.form.btnSaveA.addEventHandler("onclick",this.divData_btnSaveA_onclick,this);
            this.divData.form.btnFileAttach.addEventHandler("onclick",this.divData_btnFileAttach_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DZE_OBTAIN_ORDER_HIS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
