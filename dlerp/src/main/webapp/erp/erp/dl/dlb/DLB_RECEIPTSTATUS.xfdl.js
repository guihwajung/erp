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
            this.set_titletext("자동전표 코드등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRCPR_RECEIPT_STATUS_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DRCPR_CANCEL_STATUS_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MERGE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MONEY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FINANCING\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FINANCING\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"DS_ACNTUNIT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_POSITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">0</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">M/H</Col></Row><Row><Col id=\"DS_CODE\">은행</Col><Col id=\"CD_CODE\">2</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">본사</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">기타</Col></Row><Row><Col id=\"CD_CODE\">7</Col><Col id=\"DS_CODE\">주택기금승계</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_MONEY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">0</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">본인</Col></Row><Row><Col id=\"DS_CODE\">기금융자</Col><Col id=\"CD_CODE\">2</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">알선융자</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">기타융자</Col></Row><Row><Col id=\"CD_CODE\">9</Col><Col id=\"DS_CODE\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","sta00:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","ccfCD_ACNTUNIT:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta02:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkTY_MERGE","0.0","sta00:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("동일수납일자");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","cchkTY_MERGE:0.0","sta00:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("수납처구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_POSITION","sta01:0.0","sta00:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsTY_POSITION");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","ccboTY_POSITION:0.0","sta00:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_MONEY","sta03:0.0","sta00:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsTY_MONEY");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_FINANCING","ccboTY_MONEY:0.0","sta00:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFFINANCING_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","70%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","165",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("해약자환급현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cchkTY_MERGE","value","dsSearch","TY_MERGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboTY_POSITION","value","dsSearch","TY_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboTY_MONEY","value","dsSearch","TY_MONEY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_FINANCING.form.CDTextBox","value","dsSearch","CD_FINANCING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_FINANCING.form.DSTextBox","value","dsSearch","DS_FINANCING");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLB_RECEIPTSTATUS.xfdl", function() {
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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_FROM", this.gfnAddMonth(today, -3));
        	this.dsSearch.setColumn(0, "DT_TO", today);
        	this.dsSearch.setColumn(0, "TY_POSITION", "0");
        	this.dsSearch.setColumn(0, "TY_MONEY", "0");
        	this.dsSearch.setColumn(0, "TY_MERGE", "N");

        	this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus()
        };

        this.fnSetButton = function() {
        }

        this.fnSetExtendButton = function() {
        };

        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;
        	this.cchkTY_MERGE = this.divSearch.form.cchkTY_MERGE;
        	this.ccboTY_POSITION = this.divSearch.form.ccboTY_POSITION;
        	this.ccboTY_MONEY = this.divSearch.form.ccboTY_MONEY;
        	this.ccfCD_FINANCING = this.divSearch.form.ccfCD_FINANCING;

        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGrid1 = this.divData.form.divDataBottom.form.objGrid1;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLB_RECEIPTSTATUS");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DL", "DLB_RECEIPTSTATUS_01");

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_FINANCING.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("TY_MONEY", "string");
        	this.dsSelect.addColumn("TY_MERGE", "string");
        	this.dsSelect.addColumn("NO_FINANCING", "string");
        	this.dsSelect.addColumn("TY_POSITION", "string");

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect1.addColumn("TY_GUBUN", "string");
        	this.dsSelect1.addColumn("NO_CHASU", "string");
        	this.dsSelect1.addColumn("DT_FROM", "string");
        	this.dsSelect1.addColumn("DT_TO", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "TY_MONEY", this.dsSearch.getColumn(0, "TY_MONEY"));
        	this.dsSelect.setColumn(0, "TY_MERGE", this.dsSearch.getColumn(0, "TY_MERGE"));
        	this.dsSelect.setColumn(0, "NO_FINANCING", this.dsSearch.getColumn(0, "CD_FINANCING"));
        	this.dsSelect.setColumn(0, "TY_POSITION", this.dsSearch.getColumn(0, "TY_POSITION"));

        	this.dsSelect1.clearData();
        	this.dsSelect1.addRow();
        	this.dsSelect1.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect1.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect1.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect1.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect1.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select1=dsSelect1";
        	var outData     = "dsList=select0 dsList1=select10";
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

        this.fnAdd = function() {
        }

        this.fnDel = function() {
        }

        this.fnSave = function() {
        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        	this.gfnExcelExport(this.dxGrid1);
        }

        this.fnPrint = function() {
        	//DRC_RECEIPTSTATUSPREVIEW
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드가 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	if (this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_FROM"), this.dsSearch.getColumn(0, "DT_TO")) < 0) {
        		this.gfnAlert("수납종료일자는 수납시작일자보다 크거나 같아야 합니다!");
        		return false;
        	}
        	return validate;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.dsList.set_enableevent(false);
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if (this.gfnIsNull(this.dsList.getColumn(i, "DD_DAY"))) continue;

        			if (this.dsList.getColumn(i, "DD_DAY") == "0") {
        				this.dsList.setColumn(i, "DD_DAY", "정상");
        			}
        			else {
        				if (nexacro.toNumber(this.dsList.getColumn(i, "AM_DISCOUNT")) != 0) {
        					this.dsList.setColumn(i, "DD_DAY", "할인 " + this.dsList.getColumn(i, "DD_DAY") + "일");
        				}
        				else if (nexacro.toNumber(this.dsList.getColumn(i, "AM_DELAY")) != 0) {
        					this.dsList.setColumn(i, "DD_DAY", "연체 " + this.dsList.getColumn(i, "DD_DAY") + "일");
        				}
        			}

        		}
        		this.dsList.set_enableevent(true);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "FLAG", "X");
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_TOTALCHASU", "");
        	}
        	else if (id == "ccfCD_FINANCING") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        		dsUserParam.setColumn(nrow, "YN_OPTION", "N");
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid1);

        		if (e.columnid == "TY_MONEY") {
        			switch (e.newvalue) {
        				case "0":
        				case "1":
        					this.ccfCD_FINANCING.set_visible(false);
        					this.dsSearch.setColumn(0, "CD_FINANCING", "");
        					this.dsSearch.setColumn(0, "DS_FINANCING", "");
        					this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "DS_VENDOR1"), "size", 0);
        					break;
        				default:
        					this.ccfCD_FINANCING.set_visible(true);
        					this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "DS_VENDOR1"), "size", 100);
        					break;
        			}
        		}
        	}
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLB_RECEIPTSTATUS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
