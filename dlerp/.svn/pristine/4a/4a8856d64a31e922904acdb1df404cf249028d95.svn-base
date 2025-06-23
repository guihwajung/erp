(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWZ_ORDPLN");
            this.set_titletext("현장보증금관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWZPR_SITEDMNY_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWZPR_SITEDMNY_SAVE</Col></Row><Row><Col id=\"SP\">DWZPR_SITEDMNY_EXECUTE</Col><Col id=\"TARGET\">exec</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWZ_SITEDMNY.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWZ_ORDPLN_onload = function(obj,e)
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


           //타화면에서 오픈시 넘어오는 파라미터 처리
           if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().DS_SITE)) {
              this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	  this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
              this.FormBtns.Select.click();
           }

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        //    var id_group = this.FormInfo.ID_GROUP;
        //    var gr_search = this.FormInfo.GR_SEARCH;
        //    var cd_role = this.FormInfo.CD_ROLE;
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
           this.btn1 = this.gfnFormButtonAdd("btnSlipIssue", "fnSlipIssue");
           this.btn2 = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");
           this.btn3 = this.gfnFormButtonAdd("btnSlipCancel", "fnSlipCancel");
        };

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
           this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWZ_SITEDMNY");

           	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

           this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("CD_DMNYDIV", "string");
        	this.dsSave.addColumn("NO_SEQ", "string");
        	this.dsSave.addColumn("SN_SEQ", "int");
        	this.dsSave.addColumn("CD_TERR", "string");
        	this.dsSave.addColumn("CD_RNTL", "string");
        	this.dsSave.addColumn("NO_PTP", "bigdecimal");
        	this.dsSave.addColumn("NO_PCNT", "int");
        	this.dsSave.addColumn("DT_CONT", "string");
        	this.dsSave.addColumn("FR_RNTL", "string");
        	this.dsSave.addColumn("TO_RNTL", "string");
        	this.dsSave.addColumn("DS_ADDR", "string");
        	this.dsSave.addColumn("DS_CONTCTS", "string");
        	this.dsSave.addColumn("CD_CONTREFVAL", "string");
        	this.dsSave.addColumn("RT_OCOERT", "bigdecimal");
        	this.dsSave.addColumn("AM_DMNY", "bigdecimal");
        	this.dsSave.addColumn("AM_OCODMNY", "bigdecimal");
        	this.dsSave.addColumn("TY_BND", "string");
        	this.dsSave.addColumn("AM_BNDDMNY", "bigdecimal");
        	this.dsSave.addColumn("DT_BNDSTR", "string");
        	this.dsSave.addColumn("DT_BNDXPR", "string");
        	this.dsSave.addColumn("CD_BNDREFVAL", "string");
        	this.dsSave.addColumn("DT_ACNT", "string");
        	this.dsSave.addColumn("DS_OLN", "string");
        	this.dsSave.addColumn("CD_VNDR", "string");
        	this.dsSave.addColumn("DS_RMKS", "string");
        	this.dsSave.addColumn("NO_SLIP", "string");
        	this.dsSave.addColumn("NO_ERPKEY", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("CD_DMNYDIV", "string");
        	this.dsExec.addColumn("NO_SEQ", "string");
        	this.dsExec.addColumn("SN_SEQ", "int");
        	this.dsExec.addColumn("CD_DEPT", "string");
        	this.dsExec.addColumn("NO_SLIP", "string");

        }


        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *   조회 버튼
          */
        this.fnSelect = function() {
           if (!this.fnSelectValidate()) return false;

           this.gfnGridBeforeSelect(this.dxGrid);

           this.dsSelect.clearData();
           this.dsSelect.addRow();

           this.dsSelect.setColumn(0, "TY_WRK", "Q");
           this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));


           var strSvcId    = "select";
           var strSvcType  = "grid";
           var inProc      = "_dsProc";
           var inData      = "select=dsSelect";
           var outData     = "dsList=select0";
           var strArg      = "";
           var callBackFnc = "fnCallback";

           this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
                          strSvcType ,    // transaction을 요청할 구분
                          inProc,         // Procedure 정보 Dataset 이름
                          inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                          outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                          strArg,          // 입력갑스로 보낼 arguments, strFormData="20120607"
                          callBackFnc); // 통신방법 정의 [생략가능]
        }



        /*
         *   입력 버튼
         */
        this.fnAdd = function() {
           var nrow = this.gfnGridAdd(this.dxGrid,"bottom"); // top (default), bottom, current

           this.dsList.set_enableevent(false);
           this.dsList.setColumn(nrow, "CS_SITE", this.ccfCD_SITE.form.CDTextBox.value);
           this.dsList.setColumn(nrow, "DS_SITE", this.ccfCD_SITE.form.DSTextBox.value);
           this.dsList.setColumn(nrow, "YN_EDIT", "Y");
           this.dsList.setColumn(nrow, "RT_OCOERT", "100");
           this.dsList.setColumn(nrow, "NO_PTP", "0");
           this.dsList.setColumn(nrow, "NO_PCNT", "0");
           this.dsList.setColumn(nrow, "AM_DMNY", "0");
           this.dsList.setColumn(nrow, "AM_OCODMNY", "0");
           this.dsList.setColumn(nrow, "AM_BNDDMNY", "0");

           this.dsList.set_enableevent(true);
        };

        /*
         *   삭제 버튼
         */
        this.fnDel = function() {
           this.gfnGridDel(this.dxGrid);
        }

        /*
         *   저장 버튼
         */
        this.fnSave = function() {
           // 그리드 필수항목 체크
           if (!this.gfnGridValidate(this.dxGrid)) return;

           this.dxGrid.updateToDataset();

           this.dsSave.clearData();

           for (var i = 0; i < this.dsList.rowcount; i++) {
              var flag = this.gfnGetFlag(this.dsList, i);

        	  // 차수 컬럼이 1자리면 2자리로 셋팅
        	  if(this.dsList.getColumn(i, "NO_SEQ").length == 1){
        		  this.dsList.setColumn(i, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ").padLeft(2, "0"));
        	  }

              switch(flag) {
                 case "I":
                 case "U":
                 case "D":
        			if(this.dsList.getColumn(i, "TY_BND") != '' && this.dsList.getColumn(i, "TY_BND") != 'N'){
        				if(this.gfnIsNull(this.dsList.getColumn(i, "AM_BNDDMNY")) || this.gfnIsNull(this.dsList.getColumn(i, "DT_BNDSTR")) || this.gfnIsNull(this.dsList.getColumn(i, "DT_BNDXPR"))){
        					  this.gfnAlert("채권보증금액,  보증시작일자, 보증만료일자를 입력하세요.");
        					  return false;
        				}
        			}



                    var nrow = this.dsSave.addRow();
                    this.dsSave.setColumn(nrow, "TY_WRK", flag);
        			this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSave.setColumn(nrow, "CD_DMNYDIV", this.dsList.getColumn(i, "CD_DMNYDIV"));
        			this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        			this.dsSave.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));
        			this.dsSave.setColumn(nrow, "CD_TERR", this.dsList.getColumn(i, "CD_TERR"));
        			this.dsSave.setColumn(nrow, "CD_RNTL", this.dsList.getColumn(i, "CD_RNTL"));
        			this.dsSave.setColumn(nrow, "NO_PTP", this.dsList.getColumn(i, "NO_PTP"));
        			this.dsSave.setColumn(nrow, "NO_PCNT", this.dsList.getColumn(i, "NO_PCNT"));
        			this.dsSave.setColumn(nrow, "DT_CONT", this.dsList.getColumn(i, "DT_CONT"));
        			this.dsSave.setColumn(nrow, "FR_RNTL", this.dsList.getColumn(i, "FR_RNTL"));
        			this.dsSave.setColumn(nrow, "TO_RNTL", this.dsList.getColumn(i, "TO_RNTL"));
        			this.dsSave.setColumn(nrow, "DS_ADDR", this.dsList.getColumn(i, "DS_ADDR"));
        			this.dsSave.setColumn(nrow, "DS_CONTCTS", this.dsList.getColumn(i, "DS_CONTCTS"));
        			this.dsSave.setColumn(nrow, "CD_CONTREFVAL", this.dsList.getColumn(i, "CD_CONTREFVAL"));
        			this.dsSave.setColumn(nrow, "RT_OCOERT", this.dsList.getColumn(i, "RT_OCOERT"));
        			this.dsSave.setColumn(nrow, "AM_DMNY", this.dsList.getColumn(i, "AM_DMNY"));
        			this.dsSave.setColumn(nrow, "AM_OCODMNY", this.dsList.getColumn(i, "AM_OCODMNY"));
        			this.dsSave.setColumn(nrow, "TY_BND", this.dsList.getColumn(i, "TY_BND"));
        			this.dsSave.setColumn(nrow, "AM_BNDDMNY", this.dsList.getColumn(i, "AM_BNDDMNY"));
        			this.dsSave.setColumn(nrow, "DT_BNDSTR", this.dsList.getColumn(i, "DT_BNDSTR"));
        			this.dsSave.setColumn(nrow, "DT_BNDXPR", this.dsList.getColumn(i, "DT_BNDXPR"));
        			this.dsSave.setColumn(nrow, "CD_BNDREFVAL", this.dsList.getColumn(i, "CD_BNDREFVAL"));
        			this.dsSave.setColumn(nrow, "DT_ACNT", this.dsList.getColumn(i, "DT_ACNT"));
        			this.dsSave.setColumn(nrow, "DS_OLN", this.dsList.getColumn(i, "DS_OLN"));
        			this.dsSave.setColumn(nrow, "CD_VNDR", this.dsList.getColumn(i, "CD_VNDR"));
        			this.dsSave.setColumn(nrow, "DS_RMKS", this.dsList.getColumn(i, "DS_RMKS"));
        			this.dsSave.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(i, "NO_SLIP"));
        			this.dsSave.setColumn(nrow, "NO_ERPKEY", this.dsList.getColumn(i, "NO_ERPKEY"));
                    break;
              }
           }

           if (this.dsSave.rowcount == 0) return;

           var strSvcId    = "save";
           var strSvcType  = "save";
           var inProc      = "_dsProc";
           var inData      = "save=dsSave";
           var outData     = "";
           var strArg      = "";
           var callBackFnc = "fnCallback";

           this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
                          strSvcType ,    // transaction을 요청할 구분
                          inProc,         // Procedure 정보 Dataset 이름
                          inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                          outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                          strArg,       // 입력값으로 보낼 arguments, strFormData="20120607"
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
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *   조회 Validate
          */
        this.fnSelectValidate = function() {
           var validate = true;
           if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.text)) {
              validate = false;
              // Alert후 실행할 처리
              this.fnVaidateCallback = function() {
                 this.ccfCD_SITE.form.CDTextBox.setFocus();
              }
              this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
           }

           return validate;
        };


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *   콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
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
           else if(svcID == "SLPPUB") {
              if (errorCode == 0) {
        		 this.gfnAlert("전표발행이 정상 처리되었습니다.");
                 this.FormBtns.Select.click();
              } else {
                 this.gfnAlert(errorMsg);
              }
           }
           else if(svcID == "SLPCNC") {
              if (errorCode == 0) {
        		this.gfnAlert("전표취소가 정상 처리되었습니다.");
                 this.FormBtns.Select.click();
              } else {
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

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
           if (id == "DWX_CFVENDOR_DH") {
              dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	  dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	  dsUserParam.setColumn(nrow, "TY_VENDOR", "DMNY");
           }
           return true;
        };

        this.fnGrid_ExpandUp = function(obj, e) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm == "BTN_CONTREF" || colnm == "BTN_BNDREF") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        		if(this.gfnGetFlag(this.dsList, e.row) == "I"){
        			this.gfnAlert("저장 후 파일첨부 진행.");
        			return false;
        		}
        		if(colnm == "BTN_CONTREF"){
        			var fileManager = {};
        			fileManager.CD_GUBUN = "DWZ2";
        			fileManager.CD_DIR = [this.dsList.getColumn(e.row, "CD_CONTREFVAL")];

        			if(this.FormInfo.TY_AUTH == "R") {
        				fileManager.IS_READONLY = true;
        			} else {
        				fileManager.IS_READONLY = false;
        			}
        			this.gfnFileManager(fileManager, "fnFileCallback");
        		}else if(colnm == "BTN_BNDREF"){
        			var fileManager = {};
        			fileManager.CD_GUBUN = "DWZ3";
        			fileManager.CD_DIR = [this.dsList.getColumn(e.row, "CD_BNDREFVAL")];

        			if(this.FormInfo.TY_AUTH == "R") {
        				fileManager.IS_READONLY = true;
        			} else {
        				fileManager.IS_READONLY = false;
        			}
        			this.gfnFileManager(fileManager, "fnFileCallback");
        		}
        	}
        };

         this.fnGrid_EnterCell = function(obj, row, cell){

        	if(this.gfnGetFlag(this.dsList, row) != "I"){
        		if(this.dsList.getColumn(row, "YN_EDIT") != "Y"){
        			return false;
        		}
        	}
         };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        this.dsSearch_onvaluechanged = function(obj,e)
        {
           if(e.oldvalue != e.newvalue) {
              this.gfnSetFormStatus(this);   // 폼상태 초기화
              this.gfnGridClear(this.dxGrid);
           }
        };
        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(this.gfnGetFlag(this.dsList, e.row) == "I"){
        		if(e.oldvalue != e.newvalue) {
        			if(e.columnid == "DT_CONT"){
        				this.dsList.setColumn(e.row, "DT_ACNT", this.dsList.getColumn(e.row, "DT_CONT"));
        			}else if(e.columnid == "AM_DMNY" || e.columnid == "RT_OCOERT"){
        				this.dsList.setColumn(e.row, "AM_OCODMNY", Math.floor(this.dsList.getColumn(e.row, "AM_DMNY") * this.dsList.getColumn(e.row, "RT_OCOERT")*0.01));
        			}
        		}
        	}
        };


        this.fnSlipIssue = function(obj,e) {
        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("전표발행 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	this.fnSlipExcute("SLPPUB");
        };

        this.fnSlipCancel = function(obj,e) {
        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("전표취소 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}
        	this.fnSlipExcute("SLPCNC");
        };

        this.fnSlipSearch = function(obj,e) {

        	this.gfnAlert("추후진행예정");
        	return false;

        };

        this.fnSlipExcute = function(flg){

        	this.dsExec.clearData();

        	for(var i = 0;i< this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			var nrow = this.dsExec.addRow();
        			this.dsExec.setColumn(nrow, "TY_WRK", flg);
        			this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsExec.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsExec.setColumn(nrow, "CD_DMNYDIV", this.dsList.getColumn(i, "CD_DMNYDIV"));
        			this.dsExec.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        			this.dsExec.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));
        			this.dsExec.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			this.dsExec.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(i, "NO_SLIP"));
        		}
        	}

        	if (this.dsExec.rowcount == 0) return;

           var strSvcId    = flg;
           var strSvcType  = "save";
           var inProc      = "_dsProc";
           var inData      = "exec=dsExec";
           var outData     = "";
           var strArg      = "";
           var callBackFnc = "fnCallback";

           this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
                          strSvcType ,    // transaction을 요청할 구분
                          inProc,         // Procedure 정보 Dataset 이름
                          inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                          outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                          strArg,       // 입력값으로 보낼 arguments, strFormData="20120607"
                          callBackFnc); // 통신방법 정의 [생략가능]

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWZ_ORDPLN_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWZ_SITEDMNY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
