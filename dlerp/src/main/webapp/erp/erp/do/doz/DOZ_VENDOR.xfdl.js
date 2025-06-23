(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DCA_REGISTLIST");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOZPR_VENDOR_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOZPR_VENDOR_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RNK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_VENDOR\"/><Col id=\"NO_RNK\"/><Col id=\"YN_DH\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">NM_CONST_CO</Col><Col id=\"DS_FIELD\">업체명</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_RNK","staCD_SITE:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCONT1","ctxtNO_RNK:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("도급순위 상위");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCONT2","staCONT1:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR","staCONT2:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk_YN_DH","0.0","staCD_SITE:10.0","115","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("회계연결 거래처");
            obj.set_truevalue("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","55",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new BindItem("item0","divSearch.form.ctxtDS_VENDOR","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtNO_RNK","value","dsSearch","NO_RNK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.chk_YN_DH","value","dsSearch","YN_DH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DOZ_VENDOR.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DCA_REGISTLIST_onload = function(obj,e)
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

        	this.fnSetCombo();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print.
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
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
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOZ_VENDOR");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();

        	this.dsSelect.addColumn("DS_VENDOR", "string");		// 업체명
        	this.dsSelect.addColumn("NO_RNK", "string");		// 도급순위 상위
        	this.dsSelect.addColumn("YN_DH", "string");			// 회계연결 거래처
        };

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

        	this.dsSelect.setColumn(0, "DS_VENDOR", this.dsSearch.getColumn(0, "DS_VENDOR"));
        	this.dsSelect.setColumn(0, "NO_RNK", this.dsSearch.getColumn(0, "NO_RNK"));
            this.dsSelect.setColumn(0, "YN_DH", this.dsSearch.getColumn(0, "YN_DH"));

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
        	this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("CD_CONST_CO", "string");
        	this.dsSave.addColumn("NM_CONST_CO", "string");
        	this.dsSave.addColumn("NO_SJC_DO", "string");
        	this.dsSave.addColumn("NM_CEO", "string");
        	this.dsSave.addColumn("CD_LOC", "string");
        	this.dsSave.addColumn("NO_RNK", "string");
        	this.dsSave.addColumn("AM_CVARCH", "bigdecimal");
        	this.dsSave.addColumn("AM_CV", "bigdecimal");
        	this.dsSave.addColumn("AM_ARCH", "bigdecimal");
        	this.dsSave.addColumn("NO_LIC", "string");
        	this.dsSave.addColumn("DT_EST", "string");
        	this.dsSave.addColumn("NO_TEL", "string");
        	this.dsSave.addColumn("NO_FAX", "string");
        	this.dsSave.addColumn("CD_ZIP", "string");
        	this.dsSave.addColumn("DS_ADDR1", "string");
        	this.dsSave.addColumn("DS_ADDR2", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("YN_USE", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();

        	 //필터 설정된 그리드에서는 사용하면 안됨
        	//if(!this.gfnDataValidate(this.dsList, this.dsRequired))return;

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "CD_CONST_CO", this.dsList.getColumn(i, "CD_CONST_CO"));
        				this.dsSave.setColumn(nrow, "NM_CONST_CO", this.dsList.getColumn(i, "NM_CONST_CO"));
        				this.dsSave.setColumn(nrow, "NO_SJC_DO", this.dsList.getColumn(i, "NO_SJC_DO"));
        				this.dsSave.setColumn(nrow, "NM_CEO", this.dsList.getColumn(i, "NM_CEO"));
        				this.dsSave.setColumn(nrow, "CD_LOC", this.dsList.getColumn(i, "CD_LOC"));
        				this.dsSave.setColumn(nrow, "NO_RNK", this.dsList.getColumn(i, "NO_RNK"));
        				this.dsSave.setColumn(nrow, "AM_CVARCH", this.dsList.getColumn(i, "AM_CVARCH"));
        				this.dsSave.setColumn(nrow, "AM_CV", this.dsList.getColumn(i, "AM_CV"));
        				this.dsSave.setColumn(nrow, "AM_ARCH", this.dsList.getColumn(i, "AM_ARCH"));
        				this.dsSave.setColumn(nrow, "NO_LIC", this.dsList.getColumn(i, "NO_LIC"));
        				this.dsSave.setColumn(nrow, "DT_EST", this.dsList.getColumn(i, "DT_EST"));
        				this.dsSave.setColumn(nrow, "NO_TEL", this.dsList.getColumn(i, "NO_TEL"));
        				this.dsSave.setColumn(nrow, "NO_FAX", this.dsList.getColumn(i, "NO_FAX"));
        				this.dsSave.setColumn(nrow, "CD_ZIP", this.dsList.getColumn(i, "CD_ZIP"));
        				this.dsSave.setColumn(nrow, "DS_ADDR1", this.dsList.getColumn(i, "DS_ADDR1"));
        				this.dsSave.setColumn(nrow, "DS_ADDR2", this.dsList.getColumn(i, "DS_ADDR2"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
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
        this.fnSelectValidate = function() {
           var validate = true;

           return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ***********************************************************************
         /
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode == 0) {
        		if (svcID == "select") {
        			this.gfnGridAfterSelect(this.dxGrid);
        		}
        		else if(svcID == "save") {
        			if (errorCode == 0) {
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		}
        	} else {
        		this.gfnAlert(errorMsg);
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

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DOX_CFVENDOR_DH") {
         		dsUserParam.setColumn(nrow, "CD_CORP", "");
         		dsUserParam.setColumn(nrow, "CD_SITE", "");
         		dsUserParam.setColumn(nrow, "TY_VENDOR", "");
         	}
        	return true;
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.columnid == "DS_VENDOR" || e.columnid == "NO_RNK" ||  e.columnid == "YN_DH"){
        		if(e.oldvalue != e.newvalue) {
        			this.gfnSetFormStatus(this);	// 폼상태 초기화
        			this.gfnGridClear(this.dxGrid);
        		}
        	}
        };

        this.fnSetCombo = function() {
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DCA_REGISTLIST_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOZ_VENDOR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
