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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_NO_PR_DIRECT_SELECT</Col></Row><Row><Col id=\"TARGET\">indirectCalc</Col><Col id=\"SP\">DWAPR_ORDER_INDIRECT_CALC</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWAPR_NO_PR_DIRECT_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CBS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CBS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CAL\" type=\"STRING\" size=\"256\"/><Column id=\"RT_CAL_1\" type=\"STRING\" size=\"256\"/><Column id=\"RT_CAL_2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL_CAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAmIndirect", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_INDIRECT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_PR","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("발주코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_PR","staNO_PR:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFPR_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CBS","ccfNO_PR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("간접비");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CBS","staCD_CBS:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFINDIRECT");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtVAL_CAL","ccfCD_CBS:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtRT_CAL_1","ctxtVAL_CAL:0.0","10.0","40","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtRT_CAL_2","ctxtRT_CAL_1:0.0","10.0","40","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
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

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_PR.form.CDTextBox","value","dsSearch","NO_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfNO_PR.form.DSTextBox","value","dsSearch","DS_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_CBS.form.CDTextBox","value","dsSearch","CD_CBS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_CBS.form.DSTextBox","value","dsSearch","DS_CBS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctxtVAL_CAL","value","dsSearch","VAL_CAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ctxtRT_CAL_1","value","dsSearch","RT_CAL_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ctxtRT_CAL_2","value","dsSearch","RT_CAL_2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWA_INDIRECT_LIST.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.amIndirect = 0;
        this.tyWrk = "Q";

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

        	//this.fnSetCombo();

        	//this.divSearch_cchkYN_DETAIL_onchanged(this.divSearch.form.cchkYN_DETAIL, {postvalue:this.divSearch.form.cchkYN_DETAIL.value});

           if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_PR)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "NO_HADOCONT", this.getOwnerFrame().NO_PR);
        		this.dsSearch.setColumn(0, "DS_HADOCONT", this.getOwnerFrame().DS_PR);
        		this.dsSearch.setColumn(0, "CD_CBS", this.getOwnerFrame().CD_ITEM);
        		this.dsSearch.setColumn(0, "DS_CBS", this.getOwnerFrame().DS_ITEM);

        		this.divSearch.form.ccfCD_CBS.form.fnCodeFindLoad();

        		this.FormBtns.Select.click();
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

           this.btnIndirectCalc = this.gfnFormButtonAdd( "btnIndirectCalc" , "fnIndirectCalc");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE  = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_PR    = this.divSearch.form.ccfNO_PR;
        	this.ccfCD_CBS   = this.divSearch.form.ccfCD_CBS;
            //this.ctxtVAL_CAL = this.divSearch.form.ctxtVAL_CAL;
            //this.ctxtRT_CAL_1 = divSearch.form.ctxtRT_CAL_1;
        	//this.ctxtRT_CAL_2 = divSearch.form.ctxtRT_CAL_2;
        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_INDIRECT_LIST");


        	this.ccfCD_CBS.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CBS.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_PR", "string");
        	this.dsSelect.addColumn("CD_STCOST", "string");
        	this.dsSelect.addColumn("AM_INDIRECT", "bigdecimal");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_PR", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("AM_INDIRECT_SIL", "bigdecimal");
        	this.dsSave.addColumn("AM_INDIRECT_PR", "bigdecimal");
        	this.dsSave.addColumn("ID_USER", "string");


            this.dsIndirectCalc = new Dataset();
        	this.dsIndirectCalc.addColumn("TY_WRK", "string");
        	this.dsIndirectCalc.addColumn("CD_SITE", "string");
        	this.dsIndirectCalc.addColumn("NO_PR", "string");
        	this.dsIndirectCalc.addColumn("CD_STCOST", "string");
        	this.dsIndirectCalc.addColumn("ID_USER", "string");
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

        	this.dsSelect.setColumn(0, "TY_WRK", this.tyWrk);
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_PR", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	this.dsSelect.setColumn(0, "CD_STCOST", this.dsSearch.getColumn(0, "CD_CBS"));
        	this.dsSelect.setColumn(0, "AM_INDIRECT", this.amIndirect);

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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

        	this.dxGrid.updateToDataset();


        	this.dsSave.clearData();


        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_PR", this.dsList.getColumn(i, "NO_PR"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "AM_INDIRECT_SIL", this.dsList.getColumn(i, "AM_INDIRECT_SIL"));
        				this.dsSave.setColumn(nrow, "AM_INDIRECT_PR", this.dsList.getColumn(i, "AM_INDIRECT_PR"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;


        			case "D":
        			break;
        		}
        	}

        	if (this.dsSave.rowcount == 0 ) return;

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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		//Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HADOCONT"))) {
        		validate = false;
        		//Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_PR.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("발주번호를 입력하세요.", "fnVaidateCallback");
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CBS"))) {
        		validate = false;
        		//Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CBS.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("간접비코드를 입력하세요.", "fnVaidateCallback");
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
        		this.tyWrk = "Q";

        		this.gfnGridAfterSelect(this.dxGrid);
        	}

        	else if(svcID == "save") {
        		//this.gfnGridAfterSelect(this.dxGridSub);
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.FormBtns.Select.click();
        	}


        	else if(svcID == "indirectCalc") {
        		if (errorCode == 0) {
        			//this.gfnAlert("간접비 자동계산을 완료했습니다.");
        			if(this.dsAmIndirect.rowcount > 0){
        				this.amIndirect = this.dsAmIndirect.getColumn(0, "AM_INDIRECT");
        			}else{
        				this.amIndirect = 0;
        			}

        			this.tyWrk = "RE";
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_CBS") {

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_CBS") {
        		var arr = codeFindData;
        		if(arr.length > 0 ){
        			this.dsSearch.setColumn(0, "CD_CBS", arr[0]["CD_CBS"]);
        			this.dsSearch.setColumn(0, "DS_CBS", arr[0]["DS_CBS"]);
        			this.dsSearch.setColumn(0, "VAL_CAL", arr[0]["VAL_CAL"]);
        			this.dsSearch.setColumn(0, "RT_CAL_1", arr[0]["RT_CAL_1"]);
        			this.dsSearch.setColumn(0, "RT_CAL_2", arr[0]["RT_CAL_2"]);

        		}
        		else {
        		    this.dsSearch.setColumn(0, "CD_CBS", "");
        			this.dsSearch.setColumn(0, "DS_CBS", "");
        			this.dsSearch.setColumn(0, "VAL_CAL", "");
        			this.dsSearch.setColumn(0, "RT_CAL_1", "");
        			this.dsSearch.setColumn(0, "RT_CAL_2", "");
        			this.divSearch.form.ctxtVAL_CAL.set_value("");
        			this.divSearch.form.ctxtRT_CAL_1.set_value("");
        			this.divSearch.form.ctxtRT_CAL_2.set_value("");

        		}
        	}

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
        		//this.gfnGridClear(this.dxGridLeft);
        		//this.gfnGridClear(this.dxGridRight);
        		this.gfnGridClear(this.dxGrid);
        		this.amIndirect = 0;



        		//this.btnSvcItem.set_enable(false);
        		//this.btnItemCont.set_enable(false);
        		//this.btnTotCont.set_enable(false);
        		//this.btnEtcPrint.set_enable(false);
        	}
        };


        //자동간접비자동계산
        this.fnIndirectCalc = function(obj,e) {

        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("간접비 자동계산을 하시겠습니까?" , "fnIndirectCalc_callback");

        }

        this.fnIndirectCalc_callback = function(strId, val){

           if(val == true) {
        		this.dsIndirectCalc.clearData();

        		this.dsIndirectCalc.addRow();

        		this.dsIndirectCalc.setColumn(0, "TY_WRK", "I");
        		this.dsIndirectCalc.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsIndirectCalc.setColumn(0, "NO_PR", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        		this.dsIndirectCalc.setColumn(0, "CD_STCOST", this.dsSearch.getColumn(0, "CD_CBS"));
                this.dsIndirectCalc.setColumn(0, "ID_USER", this.AuthClient.ID_USER);


        		if (this.dsIndirectCalc.rowcount == 0) return;

        		var strSvcId    = "indirectCalc";
        		var strSvcType  = "savesel";
        		var inProc		= "_dsProc";
        		var inData      = "indirectCalc=dsIndirectCalc";
        		var outData     = "dsAmIndirect=indirectCalc0";
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
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
             if(e.oldvalue != e.newvalue) {

        	   if(e.columnid == "AM_INDIRECT_SIL"){

        		   var row1 = this.dsList.findRow("NO_PR", "99999999");
        		   var row3 = this.dsList.findRow("NO_PR", "00000000");
        		   var vRow1Value;
        		   var row2 = 0;
        			 //alert("row1="+row1);
        			 //alert("row2="+row2);
        			 //alert("row3="+row3);


        			if (row3 == 2) {
        				 row2 = row3-1;
        				 //alert("row2="&row2);
        			}

        			if (row2 == 1) {
        				vRow1Value =  nexacro.toNumber(this.dsList.getColumn(row3, "AM_INDIRECT_SIL"),0) - nexacro.toNumber(this.dsList.getColumn(row2, "AM_INDIRECT_SIL"),0)
        				this.dsList.setColumn(row1, "AM_INDIRECT_SIL", vRow1Value);
        			 //this.dsList.setColumn(1, "AM_INDIRECT_SIL", nexacro.toNumber(this.dsList.getColumn(3, "AM_INDIRECT_SIL"),0)+1);

        			 //alert(this.dsList.setColumn(1, "AM_INDIRECT_SIL", vRow1Value));
        			 }
        	   }


        		if(e.columnid == "AM_INDIRECT_PR"){
        			if(this.dsList.rowcount == 3){
        				this.dsList.setColumn(0, "AM_INDIRECT_PR", nexacro.toNumber(this.dsList.getColumn(2, "AM_INDIRECT_PR"),0) - nexacro.toNumber(this.dsList.getColumn(1, "AM_INDIRECT_PR"),0));
        			}




        		 /*
        	     var row1 = this.dsList.findRow("NO_PR", "00000000");
        	     var row2 = this.dsList.findRow("NO_PR", "99999999");
        	     var row3 = this.dsList.findRow("NO_PR", "30951195");

        		 this.dsList.setColumn(row2, "AM_INDIRECT_PR", nexacro.toNumber(this.dsList.getColumn(row1, "AM_INDIRECT_PR"),0) - nexacro.toNumber(this.dsList.getColumn(row3, "AM_INDIRECT_PR"),0));
        		 //this.dsList.setColumn(1, "AM_INDIRECT_SIL", nexacro.toNumber(this.dsList.getColumn(3, "AM_INDIRECT_SIL"),0)+1);

        	     //alert(this.dsList.setColumn(1, "AM_INDIRECT_SIL", nexacro.toNumber(this.dsList.getColumn(3, "AM_INDIRECT_SIL"),0)+1));
        		*/


        		}

        	 }

         }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsAmIndirect.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_INDIRECT_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
