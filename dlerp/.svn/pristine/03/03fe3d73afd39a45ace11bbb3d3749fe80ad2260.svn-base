(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DRB_CONTRACTSTATESUM");
            this.set_titletext("분양현황집계");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRBPR_CONTRACT_STATE_SUM</Col></Row><Row><Col id=\"TARGET\">selectTotal</Col><Col id=\"SP\">DRBPR_CONTRACT_STATE_TOTAL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PYEONG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"TY_GUBUN\"/><Col id=\"NO_DONG\"/><Col id=\"NO_PYEONG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTotal", this);
            obj._setContents("<ColumnInfo><Column id=\"BUNYANG_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BUNYANG_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MIBUNYANG_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MIBUNYANG_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTAL_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTAL_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RATE_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RATE_SUM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","339","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("0");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DONG","ccfCD_ACNTUNIT:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("동");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_PYEONG","chkYN_DONG:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("평형");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_SITE00",null,"1","80","30","211",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"staDS_SITE00:9","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1",null,"30","212","30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBUNYANG",null,"30","80","30","staBg1:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("분양");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCNT",null,"1","80","30","132",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("세대");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAMT_SUM",null,"1","133","30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("약정금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMIBUNYANG",null,"59","80","30","211",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("미분양");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00",null,"59","212","30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTOTAL",null,"88","80","30","211",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("총계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_00",null,"88","212","30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRATE",null,"117","80","30","211",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("비율(%)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_00_00",null,"117","212","30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskBUNYANG_CNT","staBUNYANG:6","35","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskBUNYANG_SUM","mskBUNYANG_CNT:5","35","122","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskMIBUNYANG_CNT","staMIBUNYANG:6","64","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskMIBUNYANG_SUM","staMIBUNYANG:81","64","122","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskTOTAL_CNT","staTOTAL:6","93","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskTOTAL_SUM","mskTOTAL_CNT:5","93","122","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskRATE_CNT","staRATE:6","122","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_format("#,###.##");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskRATE_SUM","mskRATE_CNT:5","122","122","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_format("#,###.##");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.chkYN_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.chkYN_PYEONG","value","dsSearch","NO_PYEONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.mskBUNYANG_CNT","value","dsTotal","BUNYANG_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.mskBUNYANG_SUM","value","dsTotal","BUNYANG_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.mskMIBUNYANG_CNT","value","dsTotal","MIBUNYANG_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.mskMIBUNYANG_SUM","value","dsTotal","MIBUNYANG_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.mskTOTAL_CNT","value","dsTotal","TOTAL_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.mskTOTAL_SUM","value","dsTotal","TOTAL_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.mskRATE_CNT","value","dsTotal","RATE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.mskRATE_SUM","value","dsTotal","RATE_SUM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRB_CONTRACTSTATESUM.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "NO_DONG"  , "Y");	//동
        	this.dsSearch.setColumn(0, "NO_PYEONG", "Y");	//평형
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
        	this.ccfCD_ACNTUNIT  = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.chkYN_DONG      = this.divSearch.form.chkYN_DONG;
        	this.chkYN_PYEONG    = this.divSearch.form.chkYN_PYEONG;
        	this.dxGrid  		 = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRB_CONTRACTSTATESUM");

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridColumnColor(this.dxGrid, "RATE", "Red", "RATE <= 50");
        	this.gfnGridColumnColor(this.dxGrid, "RATE", "Blue", "RATE > 50");
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN"   , "string");
        	this.dsSelect.addColumn("NO_CHASU"   , "string");
        	this.dsSelect.addColumn("NO_DONG"    , "string");
        	this.dsSelect.addColumn("NO_PYEONG"  , "string");
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

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN"	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU"	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG"	, this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_PYEONG"	, this.dsSearch.getColumn(0, "NO_PYEONG"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect selectTotal=dsSelect";
        	var outData     = "dsList=select0 dsTotal=selectTotal0";
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

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))){
        		this.gfnAlert("사업지코드가 입력되지 않았습니다.");
        		this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		validate = false;
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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		trace("dsTotal :: "+this.dsTotal.saveXML());
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT"	, this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER"	, this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP"	, this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"	, this.FormInfo.GR_SEARCH);
        	}
        	return true;
        }
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
        		this.dsTotal.clearData();

        		trace("columnid ::"+e.columnid);

        		if(e.columnid == "NO_DONG" || e.columnid == "NO_PYEONG"){	//동,평형
        			var noDong   = (e.columnid == "NO_DONG" ? e.newvalue : obj.getColumn(e.row, "NO_DONG"));
        			var noPyeong = (e.columnid == "NO_PYEONG" ? e.newvalue : obj.getColumn(e.row, "NO_PYEONG"));

        			var noDongSize   = 0;
        			var noPyeongSize = 0;
        			if(noDong == "Y" && noPyeong == "Y"){
        				noDongSize   = 70;
        				noPyeongSize = 90;
        			}else if(noDong == "Y" && noPyeong == "N"){
        				noDongSize   = 70;
        				noPyeongSize = 0;
        			}else if(noDong == "N" && noPyeong == "Y"){
        				noDongSize   = 0;
        				noPyeongSize = 90;
        			}

        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "NO_DONG"), "size", noDongSize);
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "PYEONG"), "size", noPyeongSize);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRB_CONTRACTSTATESUM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
