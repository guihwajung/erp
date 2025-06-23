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
            this.set_titletext("집행요청일자 수정");
            this.getSetter("maxwidth").set("315");
            this.getSetter("maxheight").set("220");
            if (Form == this.constructor)
            {
                this._setFormPosition(270,130);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFBPR_DT_REQUEST_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ_EXEC\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","20","40","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("집행요청일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","109","40","131","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave","86","90","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","142","90","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_REQ","115","45","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","20","10","220","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("집행요청일자 수정");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.tclDT_REQ","value","dsList","DT_REQ");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DFB_MODIFY_DT_REQUEST_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.gubun = "";

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

        	//this.getOwnerFrame().set_width(300);
        	//this.getOwnerFrame().set_height(160);

        	// 1.집행수정일자 버튼 클릭하여 수정시 (undefined)
        	// 2.일괄배정시 집행일자 일괄처리시 (DFBPR_EXECDTL_INSERT)
        	this.gubun = this.getOwnerFrame().GUBUN;
        	//trace("this.gubun :: " + this.gubun);


        	// 이전 화면에서 데이터 받기.
         	this.dsList.setColumn(0, "SEQ_EXEC", this.getOwnerFrame().SEQ_EXEC);

        	if (!this.gfnIsNull(this.getOwnerFrame().DT_REQ)) {
        		this.dsList.setColumn(0, "DT_REQ", this.getOwnerFrame().DT_REQ);
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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
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
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("SEQ_EXEC", "bigdecimal");
        	this.dsInsert.addColumn("DT_REQ", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /*
         *	입력 버튼
         */
        this.fnAdd = function() {

        }

         /*
         *	저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
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

        // 저장 버튼 클릭
        this.divData_btnSave_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	var json = {};

        	json.DT_REQ = this.dsList.getColumn(0, "DT_REQ");	// 집행요청일자

        	this.getParentContext().close(JSON.stringify(json));
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.fnSaveValidate = function() {

        	var strMsg = "";


        	//trace("집행요청일자는->" + this.dsList.getColumn(0, "DT_REQ"));

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DT_REQ"))) {
        		strMsg += "집행요청일자는 반드시 입력 하셔야 합니다.\n";
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DFB_MODIFY_DT_REQUEST_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
