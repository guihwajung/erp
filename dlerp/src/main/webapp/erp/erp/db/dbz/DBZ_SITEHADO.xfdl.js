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
            this.set_titletext("협력업체 정보등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBZPR_SITEHADO_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DBZPR_SITEHADO_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBZPR_SITEHADO_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DBZPR_SITEHADO_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">전체</Col><Col id=\"CD_CODE\">0</Col></Row><Row><Col id=\"DS_CODE\">외주</Col><Col id=\"CD_CODE\">1</Col></Row><Row><Col id=\"DS_CODE\">자재</Col><Col id=\"CD_CODE\">2</Col></Row><Row><Col id=\"DS_CODE\">직영</Col><Col id=\"CD_CODE\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_GUBUN","staTY_GUBUN:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBZ_SITEHADO.xfdl", function() {
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
        	this.cboTY_GUBUN.set_index(0);

        	if( this.FormInfo.ID_GROUP == "6" || this.FormInfo.ID_GROUP == "C" ){
        		this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_DEPT);
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.ccfCD_SITE.form.set_readonly(true);
        		if(this.gfnIsNull(this.getOwnerFrame().CF_CD_SITE) ) {
        			this.FormBtns.Select.click();
        		}
        	}

        	if(!this.gfnIsNull(this.getOwnerFrame().CF_CD_SITE)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CF_CD_SITE);
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().CF_DS_SITE);
        		this.FormBtns.Select.click();
        	}

        	this.btnContract.set_enable(false);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFormButton = this.gfnFormButtonAdd("WorkBtn1", "fnExcelUpload"); // EXCEL선택
        	this.btnContract = this.gfnFormButtonAdd("btnContract", "fnContract"); // 계약완료조회
        };
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.cboTY_GUBUN = this.divSearch.form.cboTY_GUBUN;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBZ_SITEHADO");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");        // 현장코드
        	this.dsInsert.addColumn("CD_CTM", "string");         // 협력업체코드
        	this.dsInsert.addColumn("DS_CTM", "string");         // 협력업체명
        	this.dsInsert.addColumn("NO_HADOCONT", "string");	 // 하도계약번호
        	this.dsInsert.addColumn("DS_HADOCONT", "string");	 // 하도계약명
        	this.dsInsert.addColumn("DS_TEL", "string");         // 대표자전화
        	this.dsInsert.addColumn("DS_FAX", "string");	     // FAX번호
        	this.dsInsert.addColumn("DS_EMPNAME", "string");     // 담당자명
        	this.dsInsert.addColumn("DS_EMPTEL", "string");      // 담당자전화
        	this.dsInsert.addColumn("E_MAIL", "string");         // 대표자EMAIL
        	this.dsInsert.addColumn("SN_DSSD", "int");           // 대상세대수
        	this.dsInsert.addColumn("TY_GUBUN", "string");       // 구분(외주/자재/직영)
        	this.dsInsert.addColumn("CD_GONGJONG", "string");    // 공종코드
        	this.dsInsert.addColumn("DS_GONGJONG", "string");    // 공종명
        	this.dsInsert.addColumn("DS_PRESIDENT", "string");   // 대표자명
        	this.dsInsert.addColumn("DS_EMPEMAIL", "string");    // 담당자EMAIL
        	this.dsInsert.addColumn("DS_ADDR", "string");        // 주소
        	this.dsInsert.addColumn("DS_REMARK", "string");      // 비고
        	this.dsInsert.addColumn("DS_TEL2", "string");        // 대표자전화

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");        // 현장코드
        	this.dsUpdate.addColumn("CD_CTM", "string");         // 협력업체코드
        	this.dsUpdate.addColumn("DS_CTM", "string");         // 협력업체명
        	this.dsUpdate.addColumn("NO_HADOCONT", "string");	 // 하도계약번호
        	this.dsUpdate.addColumn("DS_HADOCONT", "string");	 // 하도계약명
        	this.dsUpdate.addColumn("DS_TEL", "string");         // 대표자전화
        	this.dsUpdate.addColumn("DS_FAX", "string");	     // FAX번호
        	this.dsUpdate.addColumn("DS_EMPNAME", "string");     // 담당자명
        	this.dsUpdate.addColumn("DS_EMPTEL", "string");         // 담당자전화
        	this.dsUpdate.addColumn("E_MAIL", "string");         // 대표자EMAIL
        	this.dsUpdate.addColumn("SN_DSSD", "int");           // 대상세대수
        	this.dsUpdate.addColumn("CD_GONGJONG", "string");    // 공종코드
        	this.dsUpdate.addColumn("DS_GONGJONG", "string");    // 공종명
        	this.dsUpdate.addColumn("DS_PRESIDENT", "string");   // 대표자명
        	this.dsUpdate.addColumn("DS_EMPEMAIL", "string");    // 담당자EMAIL
        	this.dsUpdate.addColumn("DS_ADDR", "string");        // 주소
        	this.dsUpdate.addColumn("DS_REMARK", "string");      // 비고
        	this.dsUpdate.addColumn("DS_TEL2", "string");        // 대표자전화

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");        // 현장코드
        	this.dsDelete.addColumn("CD_CTM", "string");         // 협력업체코드
        	this.dsDelete.addColumn("NO_HADOCONT", "string");    // 하도계약번호
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsList.clearData();
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0,"TY_GUBUN"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnSaveValidate()) return false;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.getRowCountNF(); i++) {
        		var flag = this.dsList.getColumnNF(i,this.ucFlag);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsInsert.setColumn(nrow, "CD_CTM", this.dsList.getColumnNF(i,"CD_CTM"));
        				this.dsInsert.setColumn(nrow, "DS_CTM", this.dsList.getColumnNF(i,"DS_CTM"));
        				this.dsInsert.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumnNF(i,"NO_HADOCONT"));
        				this.dsInsert.setColumn(nrow, "DS_HADOCONT", this.dsList.getColumnNF(i,"DS_HADOCONT"));
        				this.dsInsert.setColumn(nrow, "DS_TEL", this.dsList.getColumnNF(i,"DS_TEL"));
        				this.dsInsert.setColumn(nrow, "DS_FAX", this.dsList.getColumnNF(i,"DS_FAX"));
        				this.dsInsert.setColumn(nrow, "DS_EMPNAME", this.dsList.getColumnNF(i,"DS_EMPNAME"));
        				this.dsInsert.setColumn(nrow, "DS_EMPTEL", this.dsList.getColumnNF(i,"DS_EMPTEL"));
        				this.dsInsert.setColumn(nrow, "E_MAIL", this.dsList.getColumnNF(i,"E_MAIL"));
        				this.dsInsert.setColumn(nrow, "SN_DSSD", 0);
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsList.getColumnNF(i,"GUBUN"));
        				this.dsInsert.setColumn(nrow, "CD_GONGJONG", this.dsList.getColumnNF(i,"CD_GONGJONG"));
        				this.dsInsert.setColumn(nrow, "DS_GONGJONG", this.dsList.getColumnNF(i,"DS_GONGJONG"));
        				this.dsInsert.setColumn(nrow, "DS_PRESIDENT", this.dsList.getColumnNF(i,"DS_PRESIDENT"));
        				this.dsInsert.setColumn(nrow, "DS_EMPEMAIL", this.dsList.getColumnNF(i,"DS_EMPEMAIL"));
        				this.dsInsert.setColumn(nrow, "DS_ADDR", this.dsList.getColumnNF(i,"DS_ADDR"));
        				this.dsInsert.setColumn(nrow, "DS_REMARK", this.dsList.getColumnNF(i,"DS_REMARK"));
        				this.dsInsert.setColumn(nrow, "DS_TEL2", this.dsList.getColumnNF(i,"DS_TEL2"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.copyRow(nrow,this.dsList,i);
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "CD_CTM", this.dsList.getColumnNF(i,"CD_CTM"));
        				this.dsUpdate.setColumn(nrow, "DS_CTM", this.dsList.getColumnNF(i,"DS_CTM"));
        				this.dsUpdate.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumnNF(i,"NO_HADOCONT"));
        				this.dsUpdate.setColumn(nrow, "DS_HADOCONT", this.dsList.getColumnNF(i,"DS_HADOCONT"));
        				this.dsUpdate.setColumn(nrow, "DS_TEL", this.dsList.getColumnNF(i,"DS_TEL"));
        				this.dsUpdate.setColumn(nrow, "DS_FAX", this.dsList.getColumnNF(i,"DS_FAX"));
        				this.dsUpdate.setColumn(nrow, "DS_EMPNAME", this.dsList.getColumnNF(i,"DS_EMPNAME"));
        				this.dsUpdate.setColumn(nrow, "DS_EMPTEL", this.dsList.getColumnNF(i,"DS_EMPTEL"));
        				this.dsUpdate.setColumn(nrow, "E_MAIL", this.dsList.getColumnNF(i,"E_MAIL"));
        				this.dsUpdate.setColumn(nrow, "SN_DSSD", 0);
        				this.dsUpdate.setColumn(nrow, "CD_GONGJONG", this.dsList.getColumnNF(i,"CD_GONGJONG"));
        				this.dsUpdate.setColumn(nrow, "DS_GONGJONG", this.dsList.getColumnNF(i,"DS_GONGJONG"));
        				this.dsUpdate.setColumn(nrow, "DS_PRESIDENT", this.dsList.getColumnNF(i,"DS_PRESIDENT"));
        				this.dsUpdate.setColumn(nrow, "DS_EMPEMAIL", this.dsList.getColumnNF(i,"DS_EMPEMAIL"));
        				this.dsUpdate.setColumn(nrow, "DS_ADDR", this.dsList.getColumnNF(i,"DS_ADDR"));
        				this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsList.getColumnNF(i,"DS_REMARK"));
        				this.dsUpdate.setColumn(nrow, "DS_TEL2", this.dsList.getColumnNF(i,"DS_TEL2"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsDelete.setColumn(nrow, "CD_CTM", this.dsList.getColumnNF(i,"CD_CTM"));
        				this.dsDelete.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumnNF(i,"NO_HADOCONT"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete insert=dsInsert update=dsUpdate";
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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid,"");
        	this.dsList.setColumn(nrow, "SN_DSSD", "0");
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
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
         * 확장버튼 컨트롤 이벤트
         ************************************************************************/
        this.fnContract = function() {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");								// 현장코드
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.value;				// 현장명
        	param.NO_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT");	// 계약번호
        	param.DS_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT");	// 계약명
        	param.DT_CONT = this.dsList.getColumn(this.dsList.rowposition, ""); 				// 계약일자

        	switch(this.dsList.getColumn(this.dsList.rowposition, "GUBUN")){
        		case "1":
        			param.TY_SYS = "SU";				// 구분
        		break;
        		case "2":
        			param.TY_SYS = "MM";				// 구분
        		break;
        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_CONTRACTQRY", "fnContractCallback", param);
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
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하셔야 합니다.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}
        	return validate;
        }

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        			return false;
        		}
        		this.gfnAlert("현장코드를 입력하셔야 합니다.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}

        	var nRowNum =0;

        	for (var i = 0; i < this.dsList.getRowCountNF(); i++) {
        		if( this.dsList.getColumnNF(i,this.ucFlag) == "I" || this.dsList.getColumnNF(i,this.ucFlag) == "U") {

        			var strEmail = this.dsList.getColumnNF(i,"E_MAIL");
        			var strDsEmpEmail = this.dsList.getColumnNF(i,"DS_EMPEMAIL");

        			if( !this.gfnIsNull(strEmail) ){
        				if( !this.gfnIsEmail(nexacro.trim(strEmail)) ){
        					this.dsList.set_rowposition(nRowNum);
        					this.gfnAlert("["+(nRowNum+1)+"행] 정상적인 [대표자EMAIL]을 입력을 입력하세요."); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        					return false;
        				}
        			}

        			if( !this.gfnIsNull(strDsEmpEmail) ){
        				if( !this.gfnIsEmail(nexacro.trim(strDsEmpEmail)) ){
        					this.dsList.set_rowposition(nRowNum);
        					this.gfnAlert("["+(nRowNum+1)+"행] 정상적인 [담당자EMAIL]을 입력을 입력하세요."); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        					return false;
        				}
        			}

        			var nRow = this.dsList.findRowExprNF( this.ucFlag+" != 'D' && currow != "+i+" && CD_CTM == '"+this.dsList.getColumnNF(i,"CD_CTM")+"' && NO_HADOCONT == '"+this.dsList.getColumnNF(i,"NO_HADOCONT")+"'" );

        			if( nRow > -1 ){
        				this.dsList.set_rowposition(nRowNum);
        				this.gfnAlert(""+(nRowNum+1)+"행과 "+(nRow+1)+"행은  같은 협력업체코드, 하도계약번호가 중복됩니다."); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        				return false;
        			}
        		}
        		nRowNum++;
        	}
        	return true;
        }

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
        		this.fnContractEnable();
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /*
         *	엑셀업로드 Callback
         */
        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {

        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        // 	if (dsSheet.rowcount > 1) {
        // 		trace(dsSheet.getColumn(1, "sheetname"));
        // 	}

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다."); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        		return false;
        	}

        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;

        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);

        	this.dsList.set_enableevent(false);

        	for (var i=0; i< dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		if (nexacro.trim(dsOut.getColumn(i,"GUBUN")) == "외주"){
        			dsOut.setColumn(i,"GUBUN","1");
        		} else if (nexacro.trim(dsOut.getColumn(i,"GUBUN")) == "자재"){
        			dsOut.setColumn(i,"GUBUN","2");
        		} else if (nexacro.trim(dsOut.getColumn(i,"GUBUN")) == "직영"){
        			dsOut.setColumn(i,"GUBUN","3");
        		} else {
        			dsOut.setColumn(i,"GUBUN","");
        		}

        		// 양식이 일치하는 경우 copyRow
        		this.dsList.copyRow(nrow, dsOut, i);

        	// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
           //this.dsList.setColumn(nrow, "CD_SYSTEM", dsOut.getColumn(i, "Column1"));
           //this.dsList.setColumn(nrow, "CD_TYPE", dsOut.getColumn(i, "Column2"));

        	}
        	this.dsList.set_enableevent(true);

        	this.gfnSetFormStatus(this, "I");
        };

        this.fnContractCallback = function(strId, val) {
        	/*this.FormBtns.Select.click();*/
        };
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        /*
         * 코드파인드 변경전
         */
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", this.AuthClient.CD_DEPT);
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow)
        {
        	switch(id) {
        		case "DBX_CFCOMM":
        			dsUserParam.setColumn(nrow, "CD_GUBUN", "S5");
        		break;
        		default:
        	}
        	return true;
        };


        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         /*
         *	조회 조건 변경시 초기화
         */
         this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        /*
         *	엑셀업로드
         */
        this.fnExcelUpload = function() {
        	if (!this.fnSelectValidate()) return false;

        	// this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	// sheet명 없으면 첫번째 sheet
        	//this.gfnExcelImport("dsList","","A2","fnExcelImportCallback","import",this);
        	for(var nrow = this.dsList.rowcount; -1 < nrow; nrow--){
        		if( this.dsList.getColumn(nrow, this.ucFlag) == "I" ){
        			this.dsList.deleteRow(nrow);
        		} else {
        			this.dsList.setColumn(nrow, this.ucFlag, "D");
        			this.dsList.filterRow(nrow);
        		}
        	}

        	this.gfnExcelImport("dsList","","A2","fnExcelImportCallback","import",this);
        };

        // NO_HADOCONT 값으로 계약완료조회 버튼 활성화 or 비활성화
        this.fnContractEnable = function() {
        	if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT"))
        		&& this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT") != "0000"
        		&& this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT") != "직영"){
        		this.btnContract.set_enable(true);
        	}else{
        		this.btnContract.set_enable(false);
        	}
        }

        this.dsList_onrowposchanged = function(obj,e)
        {
        	this.fnContractEnable();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("DBZ_SITEHADO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
