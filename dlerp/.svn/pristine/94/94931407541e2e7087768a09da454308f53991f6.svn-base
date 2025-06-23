(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DRB_LOANREPLY");
            this.set_titletext("융자금상환관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRBPR_LOANAPPLY_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DRBPR_LOANREPLY_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRBPR_LOANREPLY_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRBPR_LOANREPLY_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DRBPR_LOANREPLY_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
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
            obj.getSetter("readonly").set("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","sta00:0.0","10.0","45","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_maxlength("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","35","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_maxlength("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","45","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("cbtnNO_DONGHO","ctxtNO_HO:0.0","10.0","25","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_CF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,"465","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","objGrid:15",null,"185","620",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","objGridSub:30","547","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("원금잔액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","547","164","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LEFT","sta02:5","552","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_format("#,##0");
            obj.set_readonly("true");
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

            obj = new BindItem("item2","divSearch.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRB_LOANREPLY.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_ACNTUNIT)){
        		this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        		this.dsSearch.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        		this.dsSearch.setColumn(0, "NO_DONG", 	  this.getOwnerFrame().NO_DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", 	  this.getOwnerFrame().NO_FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", 	  this.getOwnerFrame().NO_HO);

        		this.FormBtns.Select.click();
        	}
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
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.ctxtNO_DONG  	= this.divSearch.form.ctxtNO_DONG;
        	this.ctxtNO_FLOOR   = this.divSearch.form.ctxtNO_FLOOR;
        	this.ctxtNO_HO      = this.divSearch.form.ctxtNO_HO;
        	this.cbtnNO_DONGHO  = this.divSearch.form.cbtnNO_DONGHO;
        	this.mskAM_LEFT     = this.divData.form.mskAM_LEFT;
        	this.dxGrid  	    = this.divData.form.objGrid;
        	this.dxGridSub  	= this.divData.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRB_LOANREPLY_M");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DR", "DRB_LOANREPLY_D");
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT"	 , "string");
        	this.dsSelect.addColumn("TY_GUBUN"	 	 , "string");
        	this.dsSelect.addColumn("NO_CHASU"	 	 , "string");
        	this.dsSelect.addColumn("NO_DONG" 		 , "string");
        	this.dsSelect.addColumn("NO_FLOOR"	     , "string");
        	this.dsSelect.addColumn("NO_HO"	     	 , "string");
        	this.dsSelect.addColumn("NO_UNIONMEMBER" , "string");
        	this.dsSelect.addColumn("DT_FROM"	 	 , "string");
        	this.dsSelect.addColumn("DT_TO"	 		 , "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_ACNTUNIT"	 , "string");
        	this.dsSelectSub.addColumn("TY_GUBUN"	 	 , "string");
        	this.dsSelectSub.addColumn("NO_CHASU"	 	 , "string");
        	this.dsSelectSub.addColumn("NO_DONG"	 	 , "string");
        	this.dsSelectSub.addColumn("NO_FLOOR"	 	 , "string");
        	this.dsSelectSub.addColumn("NO_HO"	     	 , "string");
        	this.dsSelectSub.addColumn("NO_UNIONMEMBER"  , "string");
        	this.dsSelectSub.addColumn("TY_LOAN"	     , "string");
        	this.dsSelectSub.addColumn("NO_LOAN"	     , "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT"		, "string");
        	this.dsInsert.addColumn("TY_GUBUN"	 		, "string");
        	this.dsInsert.addColumn("NO_CHASU"	 		, "string");
        	this.dsInsert.addColumn("NO_DONG"	 		, "string");
        	this.dsInsert.addColumn("NO_FLOOR"	 		, "string");
        	this.dsInsert.addColumn("NO_HO"	     		, "string");
        	this.dsInsert.addColumn("NO_UNIONMEMBER"	, "string");
        	this.dsInsert.addColumn("TY_LOAN"	        , "string");
        	this.dsInsert.addColumn("NO_LOAN"	        , "string");
        	this.dsInsert.addColumn("NO_REPLY"	     	, "string");
        	this.dsInsert.addColumn("DT_REPLY"	     	, "string");
        	this.dsInsert.addColumn("AM_REPLY"	     	, "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LEFT"	     	, "BIGDECIMAL");
        	this.dsInsert.addColumn("ID_INSERT"	     	, "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT"		, "string");
        	this.dsUpdate.addColumn("TY_GUBUN"	 		, "string");
        	this.dsUpdate.addColumn("NO_CHASU"	 		, "string");
        	this.dsUpdate.addColumn("NO_DONG"	 		, "string");
        	this.dsUpdate.addColumn("NO_FLOOR"	 		, "string");
        	this.dsUpdate.addColumn("NO_HO"	     		, "string");
        	this.dsUpdate.addColumn("NO_UNIONMEMBER"	, "string");
        	this.dsUpdate.addColumn("TY_LOAN"	    	, "string");
        	this.dsUpdate.addColumn("NO_LOAN"	    	, "string");
        	this.dsUpdate.addColumn("NO_REPLY"	     	, "string");
        	this.dsUpdate.addColumn("DT_REPLY"	     	, "string");
        	this.dsUpdate.addColumn("AM_REPLY"	     	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_LEFT"	     	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("ID_UPDATE"	     	, "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT"		, "string");
        	this.dsDelete.addColumn("TY_GUBUN"	 		, "string");
        	this.dsDelete.addColumn("NO_CHASU"	 		, "string");
        	this.dsDelete.addColumn("NO_DONG"	 		, "string");
        	this.dsDelete.addColumn("NO_FLOOR"	 		, "string");
        	this.dsDelete.addColumn("NO_HO"	     		, "string");
        	this.dsDelete.addColumn("NO_UNIONMEMBER"	, "string");
        	this.dsDelete.addColumn("TY_LOAN"	    	, "string");
        	this.dsDelete.addColumn("NO_LOAN"	    	, "string");
        	this.dsDelete.addColumn("NO_REPLY"	     	, "string");
        	this.dsDelete.addColumn("DT_REPLY"	     	, "string");
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

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT"	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU"	 	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG"		, this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR"	 	, this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO"		 	, this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER"	, "");
        	this.dsSelect.setColumn(0, "DT_FROM"		, this.getOwnerFrame().FROM);
        	this.dsSelect.setColumn(0, "DT_TO"			, this.getOwnerFrame().TO);

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }



        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	if(this.dsList.rowcount == 0) {
        		this.gfnAlert("계약자를 먼저 검색하세요");
        		return;
        	}

        	var nRow = this.gfnGridAdd(this.dxGridSub, "bottom");
        	var noReply = nexacro.toNumber(this.dsListSub.getMax("NO_REPLY"),0)+1;
        	this.dsListSub.setColumn(nRow, "NO_REPLY", (noReply+ "").padLeft(2, "0"));
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if(this.dsList.rowcount == 0) {
        		this.gfnAlert("계약자를 먼저 검색하세요");
        		return;
        	}
        	this.gfnGridDel(this.dxGridSub);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if(this.dsList.rowcount == 0) {
        		this.gfnAlert("계약자를 먼저 검색하세요");
        		return;
        	}

        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);

        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_ACNTUNIT"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));			//사업지코드
        				this.dsInsert.setColumn(nrow, "TY_GUBUN"   		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));			//구분
        				this.dsInsert.setColumn(nrow, "NO_CHASU"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));			//차수
        				this.dsInsert.setColumn(nrow, "NO_DONG"			, this.dsSearch.getColumn(0, "NO_DONG"));							//동
        				this.dsInsert.setColumn(nrow, "NO_FLOOR"		, this.dsSearch.getColumn(0, "NO_FLOOR"));							//층
        				this.dsInsert.setColumn(nrow, "NO_HO"			, this.dsSearch.getColumn(0, "NO_HO"));								//호
        				this.dsInsert.setColumn(nrow, "NO_UNIONMEMBER"	, "");																//조합원번호
        				this.dsInsert.setColumn(nrow, "TY_LOAN"			, this.dsList.getColumn(this.dsList.rowposition, "TY_LOAN"));		//구분
        				this.dsInsert.setColumn(nrow, "NO_LOAN"			, this.dsList.getColumn(this.dsList.rowposition, "NO_LOAN"));		//부과차수
        				this.dsInsert.setColumn(nrow, "NO_REPLY"		, this.dsListSub.getColumn(i, "NO_REPLY"));							//상환차수
        				this.dsInsert.setColumn(nrow, "DT_REPLY"		, this.dsListSub.getColumn(i, "DT_REPLY"));							//상환일자
        				this.dsInsert.setColumn(nrow, "AM_REPLY"		, this.dsListSub.getColumn(i, "AM_REPLY"));							//상환금액
        				this.dsInsert.setColumn(nrow, "AM_LEFT"			, 0);																//잔액
        				this.dsInsert.setColumn(nrow, "ID_INSERT"		, this.AuthClient.ID_USER);											//등록자ID
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN"   		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsUpdate.setColumn(nrow, "NO_DONG"			, this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsUpdate.setColumn(nrow, "NO_FLOOR"		, this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsUpdate.setColumn(nrow, "NO_HO"			, this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsUpdate.setColumn(nrow, "NO_UNIONMEMBER"	, "");
        				this.dsUpdate.setColumn(nrow, "TY_LOAN"			, this.dsList.getColumn(this.dsList.rowposition, "TY_LOAN"));
        				this.dsUpdate.setColumn(nrow, "NO_LOAN"			, this.dsList.getColumn(this.dsList.rowposition, "NO_LOAN"));
        				this.dsUpdate.setColumn(nrow, "NO_REPLY"		, this.dsListSub.getColumn(i, "NO_REPLY"));
        				this.dsUpdate.setColumn(nrow, "DT_REPLY"		, this.dsListSub.getColumn(i, "DT_REPLY"));
        				this.dsUpdate.setColumn(nrow, "AM_REPLY"		, this.dsListSub.getColumn(i, "AM_REPLY"));
        				this.dsUpdate.setColumn(nrow, "AM_LEFT"			, 0);
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE"		, this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ACNTUNIT"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN"   		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsDelete.setColumn(nrow, "NO_CHASU"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsDelete.setColumn(nrow, "NO_DONG"			, this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsDelete.setColumn(nrow, "NO_FLOOR"		, this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsDelete.setColumn(nrow, "NO_HO"			, this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsDelete.setColumn(nrow, "NO_UNIONMEMBER"	, "");
        				this.dsDelete.setColumn(nrow, "TY_LOAN"			, this.dsList.getColumn(this.dsList.rowposition, "TY_LOAN"));
        				this.dsDelete.setColumn(nrow, "NO_LOAN"			, this.dsList.getColumn(this.dsList.rowposition, "NO_LOAN"));
        				this.dsDelete.setColumn(nrow, "NO_REPLY"		, this.dsListSub.getColumn(i, "NO_REPLY"));
        				this.dsDelete.setColumn(nrow, "DT_REPLY"		, this.dsListSub.getColumn(i, "DT_REPLY"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        	var arrGrid = [this.dxGrid, this.dxGridSub];
        	var arrSheetName = ["융자내역", "상환내역"];

        	this.gfnExcelExportMulti(arrGrid, arrSheetName);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }


        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.dsListSub.clearData();

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_ACNTUNIT"	 	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectSub.setColumn(0, "TY_GUBUN"	 	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectSub.setColumn(0, "NO_CHASU"	 	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectSub.setColumn(0, "NO_DONG"	 	 	, this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelectSub.setColumn(0, "NO_FLOOR"	 	, this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelectSub.setColumn(0, "NO_HO"	     	, this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelectSub.setColumn(0, "NO_UNIONMEMBER"  , "");
        	this.dsSelectSub.setColumn(0, "TY_LOAN"	     	, this.dsList.getColumn(this.dsList.rowposition, "TY_LOAN"));
        	this.dsSelectSub.setColumn(0, "NO_LOAN"	     	, this.dsList.getColumn(this.dsList.rowposition, "NO_LOAN"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
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
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
          */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))){
        		this.gfnAlert("사업지코드는 필수입니다.");
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
        	} else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);

        		if(this.dsList.rowcount > 0){
        			//원금잔액계산
        			this.fnCalcAmLeft();
        		}
        	} else if(svcID == "save"){
        		if (errorCode == 0) {
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
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

        this.divSearch_cbtnNO_DONGHO_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지를 입력해주세요!", "fnVaidateCallback");
        		return;
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG = "1";

        	this.gfnFormOpen("DRI", "DRI_DONGHOCONTRACT", "fnPopupCallback", param);
        };

        this.fnPopupCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	if (json.DONG.length > 0) {
        		this.dsSearch.setColumn(0, "NO_DONG" , json.DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", json.FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO"	 , json.HO);
        	}
        }

        //원금잔액계산
        this.fnCalcAmLeft = function(){
        	var amApply = 0; amReply = 0, amLeft = 0, dtReply = "";

        	amApply = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_APPLY"),0);	//원금
        	amReply = nexacro.toNumber(this.dsListSub.getSum("AM_REPLY"),0);	//상환금액 합계
        	dtReply = this.dsListSub.getMax("DT_REPLY");						//최종상환일자

        	amLeft = amApply - amReply;

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(this.dsList.rowposition, "AM_REPLY"  , amReply);
        	this.dsList.setColumn(this.dsList.rowposition, "AM_REMAIN" , amLeft);
        	this.dsList.setColumn(this.dsList.rowposition, "DT_REPLY"  , dtReply);
        	this.dsList.set_enableevent(true);

        	this.mskAM_LEFT.set_value(amLeft);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctxtNO_DONG.addEventHandler("onkillfocus",this.divSearch_ctxtNO_DONG_onkillfocus,this);
            this.divSearch.form.ctxtNO_DONG.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.ctxtNO_FLOOR.addEventHandler("onkillfocus",this.divSearch_ctxtNO_FLOOR_onkillfocus,this);
            this.divSearch.form.ctxtNO_FLOOR.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.ctxtNO_HO.addEventHandler("onkillfocus",this.divSearch_ctxtNO_HO_onkillfocus,this);
            this.divSearch.form.ctxtNO_HO.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.cbtnNO_DONGHO.addEventHandler("onclick",this.divSearch_cbtnNO_DONGHO_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRB_LOANREPLY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
