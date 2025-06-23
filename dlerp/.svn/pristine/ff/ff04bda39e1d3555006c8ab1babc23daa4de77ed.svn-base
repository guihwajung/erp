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
            this.set_titletext("세무단위조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_SELFACNT_SIMPLESELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SELFACNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SELFACNT","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("세무단위코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_SELFACNTE","staCD_SELFACNT:0.0","10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.txtCD_SELFACNTE","value","dsSearch","CD_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DHV_SELFACNTSIMPLE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	//this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.FormBtns.Select.click();
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
        	this.btnDetail = this.gfnFormButtonAdd("btnDetail", "fnDetail");	//상세
        	this.btnAddData = this.gfnFormButtonAdd("btnAddData", "fnAddData");	//등록
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.txtCD_SELFACNTE = this.divSearch.form.txtCD_SELFACNTE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_SELFACNTSIMPLE");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SELFACNT", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SELFACNT", this.dsSearch.getColumn(0, "CD_SELFACNT"));

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
         *	입력 버튼
         */
        this.fnAdd = function() {

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if(this.dsList.rowcount > 0)
        		{
        			this.dsList.set_enableevent(false);
        			for(var i = 0; i < this.dsList.rowcount; i++)
        			{
        				var strSjcNo = this.dsList.getColumn(i, "NO_SJC");
        				if(!this.gfnIsNull(strSjcNo))
        				{
        					strSjcNo = strSjcNo.replace("-", "").trim();
        					if(strSjcNo.length == 10)
        					{
        						strSjcNo = strSjcNo.substr(0,3) + "-" + strSjcNo.substr(3,2) + "-" + strSjcNo.substr(5,5);
        						this.dsList.setColumn(i, "NO_SJC", strSjcNo);
        					}
        				}
        			}
        			this.dsList.set_enableevent(true);
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
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};
        	param.IUD_FLAG = "U";
        	param.CD_DEPT_SELFACNT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_SELFACNT");
        	param.DS_DEPT_SELFACNT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_SELFACNT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_SELFACNTDETAIL", "fnDetailCallback", param);
        };

        this.fnDetailCallback = function(strId, val) {
        	this.FormBtns.Select.click();
        };

        //상세정보
        this.fnDetail = function (obj,e)
        {
        	var param = {};
        	param.IUD_FLAG = "U";
        	param.CD_DEPT_SELFACNT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_SELFACNT");
        	param.DS_DEPT_SELFACNT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_SELFACNT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_SELFACNTDETAIL", "fnDetailCallback", param);
        }

        //등록
        this.fnAddData = function (obj,e)
        {
        	var param = {};
        	param.IUD_FLAG = "I";
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_SELFACNTDETAIL", "fnDetailCallback", param);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_SELFACNTSIMPLE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
