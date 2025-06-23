(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DSB_MAGAM");
            this.set_titletext("노무비마감");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSBPR_MONMAGAM_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DSBPR_YMPAY_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HADO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/><Col id=\"NO_CHASU\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppNoVal", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_APPR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID_AP\"/><Col id=\"DS_APPR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApproveVal", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장/부서 코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DZX_CFDEPTCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_HADO","ccfCD_DEPT:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("작업반");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfSEARCH_CD_HADO","staCD_HADO:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","cfSEARCH_CD_HADO:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("출역년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_PAY","ctclYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_PAY","ctclYM_PAY:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("지급년월");
            obj.set_cssclass("sta_WF_SchLabel");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cfSEARCH_CD_HADO.form.CDTextBox","value","dsSearch","CD_HADO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cfSEARCH_CD_HADO.form.DSTextBox","value","dsSearch","DS_HADO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.addIncludeScript("DSB_MONTH_PAY.xfdl","lib::libCommon.xjs");
        this.registerScript("DSB_MONTH_PAY.xfdl", function() {
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;

        this.objApp = this.gfnGetApplication();

        this.DSB_MAGAM_onload = function(obj, e) {
            // -- 필수 -------------------//
            this.gfnFormOnLoad(this);
            this.gfnFormInfo(this);
            // ---------------------------//

            this.fnSetButton();
            this.fnSetExtendButton();
            this.fnSetVariable();
            this.fnSetEvent();
            this.fnSetParameter();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

            this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.cfSEARCH_CD_HADO = this.divSearch.form.cfSEARCH_CD_HADO;
            this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        	this.ctclYM_PAY = this.divSearch.form.ctclYM_PAY;

            this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
            //그리드 초기화
            this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSB_MONTH_PAY");

        	this.cfSEARCH_CD_HADO.CodeFindName = "DWX_CFHADO_JIK";	// 계약번호
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfSEARCH_CD_HADO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

            this.dsSelect = new Dataset();
            this.dsSelect.addColumn("CD_SITE", "string"); //현장코드
            this.dsSelect.addColumn("YM_WORK", "string");
            this.dsSelect.addColumn("NO_CHASU", "string");
            this.dsSelect.addColumn("TY_CHAIYONG", "string"); //채용구분
            this.dsSelect.addColumn("CD_HADO", "string");

        	this.dsExec = new Dataset(); //지급년월확정
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("NO_ID", "string");
        	this.dsExec.addColumn("YM_WORK", "string");
        	this.dsExec.addColumn("YM_PAY", "string");

            var dt = new Date();
        	var today = this.gfnGetDate();
        	this.dsSearch.set_enableevent(false);
            //this.dsSearch.setColumn(0, "YM_WORK", dt.getFullYear().toString() + this.inZero((dt.getMonth() + 1), 2));
        	this.dsSearch.setColumn(0, "YM_WORK", today.substr(0,6));
        	this.ctclYM_PAY.form.TextBox.set_value(today.substr(0,6));

        	this.dsSearch.set_enableevent(true);

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         *   조회 버튼
         */
        this.fnSelect = function() {
            if (!this.fnValidate()) return false;

            this.gfnGridBeforeSelect(this.dxGrid);

            this.dsSelect.clearData();
            this.dsSelect.addRow();
            this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
            this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
            this.dsSelect.setColumn(0, "NO_CHASU", "");
            this.dsSelect.setColumn(0, "TY_CHAIYONG", "01");
            this.dsSelect.setColumn(0, "CD_HADO", this.dsSearch.getColumn(0, "CD_HADO"));

            var strSvcId = "select";
            var strSvcType = "grid";
            var inProc = "_dsProc";
            var inData = "select=dsSelect";
            var outData = "dsList=select0";
            var strArg = "";
            var callBackFnc = "fnCallback";

            this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                strSvcType, // transaction을 요청할 구분
                inProc, // Procedure 정보 Dataset 이름
                inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *   입력 버튼
         */
        this.fnAdd = function() {
            //this.gfnGridAdd(this.dxGrid);
        }

        /*
         *   삭제 버튼
         */
        this.fnDel = function() {
            //this.gfnGridDel(this.dxGrid);
        }

        /*
         *   저장 버튼
         */
        this.fnSave = function() {

        	this.dsExec.clearData();

        	for(var i = 0; i < this.dsList.rowcount; i++){
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if(flag == "U")
        		{
        			var nrow = this.dsExec.addRow();
        			this.dsExec.setColumn(nrow, "CD_SITE", this.dsSelect.getColumn(0, "CD_SITE"));
        			this.dsExec.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        			this.dsExec.setColumn(nrow, "YM_WORK", this.dsSelect.getColumn(0, "YM_WORK"));
        			this.dsExec.setColumn(nrow, "YM_PAY", this.dsList.getColumn(i, "YM_PAY"));
        		}
        	}

            if (this.dsExec.rowcount == 0) return;

            var strSvcId = "exec";
            var strSvcType = "save";
            var inProc = "_dsProc";
            var inData = "exec=dsExec";
            var outData = "";
            var strArg = "";
            var callBackFnc = "fnCallback";

            this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                strSvcType, // transaction을 요청할 구분
                inProc, // Procedure 정보 Dataset 이름
                inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                callBackFnc); // 통신방법 정의 [생략가능]
        }
        /*
         *   엑셀 버튼
         */
        this.fnExcel = function() {
            this.gfnExcelExport(this.dxGrid);
        }

        /*
         *   출력 버튼
         */
        this.fnPrint = function() {}

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *   조회 Validate
         */
        this.fnValidate = function() {
            var validate = true;

            if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
                validate = false;
                this.fnVaidateCallback = function() {
                    this.ccfCD_DEPT.form.CDTextBox.setFocus();
                }
                this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");

            }
            else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
                validate = false;
                this.fnVaidateCallback = function() {
                    this.ctclYM_WORK.form.TextBox.setFocus();
                }
                this.gfnAlert("기성년월을 입력하세요.", "fnVaidateCallback");

            }
            return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ***********************************************************************

        /*
         *   콜백 처리
         */

        this.fnCallback = function(svcID, errorCode, errorMsg) {
            if (errorCode != 0) {
                this.gfnAlert(errorMsg);

                return;
            }

            if (svcID == "select")
        	{
                this.gfnGridAfterSelect(this.dxGrid);
            }
        	else if (svcID == "exec")
        	{
               this.FormBtns.Select.click();
            }
        }


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_DEPT") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
         	} else if (id == "cfSEARCH_CD_HADO") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
         	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj, e) {
            if (e.oldvalue != e.newvalue) {
                this.gfnSetFormStatus(this); // 폼상태 초기화
                this.gfnGridClear(this.dxGrid);
            }
        };

        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        //날짜 셋팅
        this.inZero = function(p1, p2) {
            var zero = "";
            for (var i = 0; i < p2; i++) zero += "0";
            return zero.toString().concat(p1).match(new RegExp("\\d{" + p2 + "}$"));
        };


        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "TY_CHECK"){
        		if(e.newvalue == "1"){
        			this.dsList.setColumn(e.row, "YM_PAY", this.ctclYM_PAY.form.TextBox.value);
        		}else{
        			this.dsList.setColumn(e.row, "YM_PAY", "");
        		}

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DSB_MAGAM_onload,this);
            this.divSearch.form.staYM_WORK.addEventHandler("onclick",this.divSearch_staYM_WORK_onclick,this);
            this.divSearch.form.staYM_PAY.addEventHandler("onclick",this.divSearch_staYM_WORK_onclick,this);
            this.divData.addEventHandler("onlbuttonup",this.divData_onlbuttonup,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSB_MONTH_PAY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
