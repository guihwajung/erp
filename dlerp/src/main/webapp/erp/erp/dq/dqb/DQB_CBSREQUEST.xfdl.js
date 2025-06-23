(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DQB_CBSREQUEST");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DQBPR_CBS_REQUEST_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DQBPR_CBS_REQUEST_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DQBPR_CBS_REQUEST_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DQBPR_CBS_REQUEST_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("AutoSet").set("false");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DQB_CBSREQUEST.xfdl", function() {
        this.DQB_CBSREQUEST_onload = function(obj, e) {
            // -- 필수 -------------------//
            this.gfnFormOnLoad(this);
            this.gfnFormInfo(this);
            // ---------------------------//

            this.fnSetButton();
            this.fnSetExtendButton();
            this.fnSetVariable();
            this.fnSetEvent();
            this.fnSetParameter();

            //this.FormBtns.Select.click();

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
        this.fnSetExtendButton = function() {};

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
            this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
            this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

            this.ccfCD_SITE.CodeFindName = "DZX_CFSITE";
            this.gfnGridInit(this.dxGrid, this.dsList, "DQ", "DQB_CBSITEM_REQUEST");

            this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
            // 셀 수정가능 여부
            //this.dxGrid.EnterCell = "fnGrid_EnterCell";
            // 그리드 코드파인드 설정
            this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

            this.dsList.addEventHandler("onvaluechanged", this.fnGrid_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

            this.dsSelect = new Dataset();
            this.dsSelect.addColumn("CD_SITE", "string");
            this.dsSelect.addColumn("DT_REQUEST", "string");

            this.dsInsert = new Dataset();
            this.dsInsert.addColumn("DS_CBSR", "string");
            this.dsInsert.addColumn("SZ_CBSR", "string");
            this.dsInsert.addColumn("UT_CBSR", "string");
            this.dsInsert.addColumn("ID_REQUEST", "string");
            this.dsInsert.addColumn("CD_CORP", "string");
            this.dsInsert.addColumn("CD_SITE", "string");
            this.dsInsert.addColumn("CD_COST", "string");
            this.dsInsert.addColumn("DS_RM", "string");

            this.dsUpdate = new Dataset();
            this.dsUpdate.addColumn("SN_NO", "string");
            this.dsUpdate.addColumn("TY_GUBUN", "string");
            this.dsUpdate.addColumn("CD_CBSITEM", "string");
            this.dsUpdate.addColumn("CD_CBSMENU", "string");
            this.dsUpdate.addColumn("CD_ITEM", "string");
            this.dsUpdate.addColumn("DS_ITEM", "string");
            this.dsUpdate.addColumn("SZ_CBSC", "string");
            this.dsUpdate.addColumn("UT_CBSC", "string");
            this.dsUpdate.addColumn("ID_TRANSFER", "string");

            this.dsDelete = new Dataset();
            this.dsDelete.addColumn("SN_NO", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         *	조회 버튼
         */
        this.fnSelect = function() {
            if (!this.fnValidate()) return;

            this.dsSelect.clearData();
            this.dsSelect.addRow();
            this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
            this.dsSelect.setColumn(0, "DT_REQUEST", "");

            var strSvcId = "select";
            var strSvcType = "grid";
            var inProc = "_dsProc";
            var inData = "select=dsSelect";
            var outData = "dsList=select0";
            var strArg = "";
            var callBackFnc = "fnCallback";

            this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                strSvcType, // trabsaction을 요청할 구분
                inProc, // Procedure 정보 Dataset 이름
                inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
            var nrow = this.gfnGridAdd(this.dxGrid, "buttom"); // top (default), bottom, current
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
            // 그리드 필수항목 체크``
            if (!this.gfnGridValidate(this.dxGrid)) return;

            this.dxGrid.updateToDataset();

            this.dsInsert.clearData();
            this.dsUpdate.clearData();
            this.dsDelete.clearData();

            for (var i = 0; i < this.dsList.rowcount; i++) {
                var flag = this.gfnGetFlag(this.dsList, i);
                switch (flag) {
                    case "I":
                        var nrow = this.dsInsert.addRow();
                        this.dsInsert.setColumn(nrow, "DS_CBSR", this.dsList.getColumn(i, "DS_CBSR"));
                        this.dsInsert.setColumn(nrow, "SZ_CBSR", this.dsList.getColumn(i, "SZ_CBSR"));
                        this.dsInsert.setColumn(nrow, "UT_CBSR", this.dsList.getColumn(i, "UT_CBSR"));
                        this.dsInsert.setColumn(nrow, "ID_REQUEST", this.AuthClient.ID_USER);
                        this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
                        this.dsInsert.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
                        this.dsInsert.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
                        this.dsInsert.setColumn(nrow, "DS_RM", this.dsList.getColumn(i, "DS_RM"));
                        break;

                    case "U":
                        var nrow = this.dsUpdate.addRow();
                        this.dsUpdate.setColumn(nrow, "SN_NO", this.dsList.getColumn(i, "SN_NO"));
                        this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
                        this.dsUpdate.setColumn(nrow, "CD_CBSITEM", this.dsList.getColumn(i, "CD_CBSITEM"));
                        this.dsUpdate.setColumn(nrow, "CD_CBSMENU", this.dsList.getColumn(i, "CD_CBSMENU"));
                        this.dsUpdate.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(i, "CD_ITEM"));
                        this.dsUpdate.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(i, "DS_ITEM"));
                        this.dsUpdate.setColumn(nrow, "SZ_CBSC", this.dsList.getColumn(i, "SZ_CBSC"));
                        this.dsUpdate.setColumn(nrow, "UT_CBSC", this.dsList.getColumn(i, "UT_CBSC"));
                        this.dsUpdate.setColumn(nrow, "ID_TRANSFER", this.AuthClient.ID_USER);
                        break;

                    case "D":
                        var nrow = this.dsDelete.addRow();
                        this.dsDelete.setColumn(nrow, "SN_NO", this.dsList.getColumn(i, "SN_NO"));
                        break;

                }
            }

            if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

            var strSvcId = "save";
            var strSvcType = "save";
            var inProc = "_dsProc";
            var inData = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
         *	엑셀 버튼
         */
        this.fnExcel = function() {
            this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {}

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
            var validate = true;

            if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
                validate = false;
                // Alert후 실행할 처리
                this.fnVaidateCallback = function() {
                    this.ccfCD_SITE.form.CDTextBox.setFocus();
                }
                this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
            }

            return validate;

        };

        /************************************************************************
         * 콜백 이벤트
         ***********************************************************************
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
            if (svcID == "select") {

                this.gfnGridAfterSelect(this.dxGrid);

            } else if (svcID == "save") {
                this.gfnGridAfterSelect(this.dxGrid);

                this.FormBtns.Select.click();
            }
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

            if (id == "DQX_EXISTING_ITEM") {
                dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

            } else if (id == "DQX_CBSITEMONLY") {
                dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
            } else if (id == "DQX_CBSMENU2") {
                dsUserParam.setColumn(nrow, "YN_ITEM", this.dsList.getColumn(this.dsList.rowposition, "TY_GUBUN"));
            }
            return true;
        }

        /************************************************************************
         * 그리드 이벤트
         *************************************************************************/
         /*
        this.fnGrid_EnterCell = function(obj: nexacro.Grid, row, cell) {

            var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);
            var gubun = this.dsList.getColumn(row, "TY_GUBUN");

            if (gubun == "E") {
        		// TY_GUBUN이 기존
                if (colnm == "CD_ITEM" || colnm == "CD_CBSMENU" || colnm == "DS_ITEM" || colnm == "SZ_CBSC" || colnm == "UT_CBSC") {
                    return false;
                }
            } else if (gubun == "N") {
                // TY_GUBUN이 신규
                if (colnm == "CD_CBSITEM") {
                    return false;
                }
            } else if (gubun == "Z") {
                // TY_GUBUN이 비규격
                if (colnm == "CD_CBSITEM") {
                    return false;
                }
            } else if (this.gfnIsNull(gubun)) {
                if (colnm == "CD_CBSITEM" || colnm == "CD_ITEM" || colnm == "CD_CBSMENU" || colnm == "DS_ITEM" || colnm == "SZ_CBSC" || colnm == "UT_CBSC") {
                    return false;
                }
            }
        };


        this.fnGrid_AfterEdit = function(obj: nexacro.NormalDataset, e: nexacro.DSColChangeEventInfo) {
        	var row = e.row;
            if (e.columnid == "CD_CBSMENU") {
                if (e.oldvalue != e.newvalue) {
                    this.dsList.setColumn(row, "DS_ITEM", this.dsList.getColumn(row, "DS_CBS"));
                    this.dsList.setColumn(row, "SZ_CBSC", this.dsList.getColumn(row, "SZ_CBS"));
                    this.dsList.setColumn(row, "UT_CBSC", this.dsList.getColumn(row, "UT_CBS"));
                }
            }
        	else if (e.columnid == "TY_GUBUN") {
        		// 구분에 따른 초기화 처리
                if (e.oldvalue != e.newvalue) {
                    if (e.newvalue == "E") {
        				this.dsList.setColumn(row, "CD_ITEM", "");
        				this.dsList.setColumn(row, "CD_CBSMENU", "");
        				this.dsList.setColumn(row, "DS_CBSMENU", "");
        				this.dsList.setColumn(row, "DS_ITEM", "");
        				this.dsList.setColumn(row, "SZ_CBSC", "");
        				this.dsList.setColumn(row, "UT_CBSC", "");
        			}
        			else if (e.newvalue == "N") {
        				this.dsList.setColumn(row, "CD_CBSITEM", "");
        				this.dsList.setColumn(row, "DS_CBSITEM", "");
        			}
                    else if (e.newvalue == "Z") {
        				this.dsList.setColumn(row, "CD_CBSITEM", "");
        				this.dsList.setColumn(row, "DS_CBSITEM", "");
        			}
        			else if (this.gfnIsNull(e.newvalue)) {
        				this.dsList.setColumn(row, "CD_CBSITEM", "");
        				this.dsList.setColumn(row, "DS_CBSITEM", "");

        				this.dsList.setColumn(row, "CD_ITEM", "");
        				this.dsList.setColumn(row, "CD_CBSMENU", "");
        				this.dsList.setColumn(row, "DS_CBSMENU", "");
        				this.dsList.setColumn(row, "DS_ITEM", "");
        				this.dsList.setColumn(row, "SZ_CBSC", "");
        				this.dsList.setColumn(row, "UT_CBSC", "");
        			}
        		}
        	}
        }
        */

        this.fnGrid_onvaluechanged = function(obj, e) {
            // AfterEdit (=oncolumnchanged) 에서는 setColumn시 oncolumnchanged 이벤트가 다시 발생할수 없게 되어있기 때문에
            // onvaluechanged에서 setColumn 처리해서 코드파인드가 로딩되도록 한다.
            if (e.columnid == "TY_GUBUN") {
                if (e.oldvalue != e.newvalue) {
                    if (e.newvalue == "Z") {
                        this.dsList.setColumn(this.dsList.rowposition, "CD_CBSMENU".replace(/X/gi, ""), this.dsList.getColumn(this.dsList.rowposition, "CD_CBS").replace(/X/gi, ""));
                    }
                }
            }
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj, e) {
            if (e.oldvalue != e.newvalue) {
                this.gfnSetFormStatus(this); // 폼상태 초기화
                this.gfnGridClear(this.dxGrid);
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DQB_CBSREQUEST_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DQB_CBSREQUEST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
