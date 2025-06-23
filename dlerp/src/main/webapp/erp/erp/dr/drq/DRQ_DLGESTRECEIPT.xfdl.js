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
            this.set_titletext("예상수납안내");
            this.getSetter("maxwidth").set("950");
            this.getSetter("maxheight").set("450");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRCPR_WEB_RECEIPTINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DRCPR_WEB_RECEIPTINFO_DATE_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DRCPR_WEB_RECEIPTINFO_CALULATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RECEIPT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HOSU\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_text("예상수납안내");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","32",null,"22","210",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("수납내역");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","60","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("수납기준일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","60","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","60","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("입금액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","60","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","60",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_RECEIPT","105","65","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_RECEIPT","335","65","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSelectRowSum",null,"65","100","20","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("선택행 합계보기");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnExit",null,"65","70","20","btnSelectRowSum:10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("닫기");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConf",null,"65","70","20","btnExit:10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","100",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.tclDT_RECEIPT","value","dsSearch","DT_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtAM_RECEIPT","value","dsSearch","AM_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DRQ_DLGESTRECEIPT.xfdl", function() {
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


        // 	this.dsSearch.setColumn(0, "DT_RECEIPT", this.gfnGetDate());
        // 	this.dsSearch.setColumn(0, "AM_RECEIPT", 0);
        // 	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        // 	this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        // 	this.dsSearch.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        // 	this.dsSearch.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        // 	this.dsSearch.setColumn(0, "NO_UNIONMEMBER", this.getOwnerFrame().NO_UNIONMEMBER);

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	this.dsSearch.setColumn(0, "DS_CONTRACTOR", this.getOwnerFrame().DS_CONTRACTOR);
        	this.dsSearch.setColumn(0, "DT_BIRTH", this.getOwnerFrame().DT_BIRTH);
        	this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        	this.dsSearch.setColumn(0, "NO_HOSU", this.getOwnerFrame().NO_HOSU);
        	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsSearch.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        	this.dsSearch.setColumn(0, "TY_GUBUN", this.getOwnerFrame().TY_GUBUN);
        	this.dsSearch.setColumn(0, "NO_CHASU", this.getOwnerFrame().NO_CHASU);

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnSelect();
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
        	this.dxGrid = this.divData.form.objGrid;

        	this.tclDT_RECEIPT = this.divData.form.tclDT_RECEIPT;
        	this.txtAM_RECEIPT = this.divData.form.txtAM_RECEIPT;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRD_DLGESTRECEIPT");

         	this.gfnGridColumnColor(this.dxGrid, "", "BACK_GangJo", "[TY_NAPIP]=='납부금액' || [TY_NAPIP]=='미수금' || [TY_NAPIP]=='합계'", true);
         	this.gfnGridColumnColor(this.dxGrid, "", "BACK_Title", "[TY_NAPIP]==''", true);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_HOSU", "string");

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect2.addColumn("TY_GUBUN", "string");
        	this.dsSelect2.addColumn("NO_CHASU", "string");
        	this.dsSelect2.addColumn("NO_DONG", "string");
        	this.dsSelect2.addColumn("NO_HOSU", "string");
        	this.dsSelect2.addColumn("DT_RECEIVED", "string");

        	this.dsSelect3 = new Dataset();
        	this.dsSelect3.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect3.addColumn("TY_GUBUN", "string");
        	this.dsSelect3.addColumn("NO_CHASU", "string");
        	this.dsSelect3.addColumn("NO_DONG", "string");
        	this.dsSelect3.addColumn("NO_HOSU", "string");
        	this.dsSelect3.addColumn("DT_RECEIVED", "string");
        	this.dsSelect3.addColumn("AM_RECEIVED", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        // 	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        // 	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        // 	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        // 	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        // 	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        // 	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        // 	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_HOSU", this.dsSearch.getColumn(0, "NO_HOSU"));

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

        this.fnSelect2 = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.dsSelect2.clearData();
        	this.dsSelect2.addRow();
        // 	this.dsSelect2.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        // 	this.dsSelect2.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        // 	this.dsSelect2.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        // 	this.dsSelect2.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        // 	this.dsSelect2.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        // 	this.dsSelect2.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        // 	this.dsSelect2.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        // 	this.dsSelect2.setColumn(0, "DT_RECEIVED", this.dsSearch.getColumn(0, "DT_RECEIPT"));

        	this.dsSelect2.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	this.dsSelect2.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect2.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));
        	this.dsSelect2.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect2.setColumn(0, "NO_HOSU", this.dsSearch.getColumn(0, "NO_HOSU"));
        	this.dsSelect2.setColumn(0, "DT_RECEIVED", this.dsSearch.getColumn(0, "DT_RECEIPT"));

        	var strSvcId    = "select2";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select2=dsSelect2";
        	var outData     = "dsList=select20";
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

        this.fnSelect3 = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.dsSelect3.clearData();
        	this.dsSelect3.addRow();
        // 	this.dsSelect3.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        // 	this.dsSelect3.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        // 	this.dsSelect3.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        // 	this.dsSelect3.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        // 	this.dsSelect3.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        // 	this.dsSelect3.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        // 	this.dsSelect3.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        // 	this.dsSelect3.setColumn(0, "DT_RECEIVED", this.dsSearch.getColumn(0, "DT_RECEIPT"));
        // 	this.dsSelect3.setColumn(0, "AM_RECEIVED", this.dsSearch.getColumn(0, "AM_RECEIPT"));

        	this.dsSelect3.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	this.dsSelect3.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect3.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));
        	this.dsSelect3.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect3.setColumn(0, "NO_HOSU", this.dsSearch.getColumn(0, "NO_HOSU"));
        	this.dsSelect3.setColumn(0, "DT_RECEIVED", this.dsSearch.getColumn(0, "DT_RECEIPT"));
        	this.dsSelect3.setColumn(0, "AM_RECEIVED", this.dsSearch.getColumn(0, "AM_RECEIPT"));

        	var strSvcId    = "select3";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select3=dsSelect3";
        	var outData     = "dsList=select30";
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

        /************************************************************************
         * Validate
         ************************************************************************/

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

        		if (this.dsList.rowcount > 0) {
        			this.dsSearch.setColumn(0, "DT_RECEIPT", this.gfnGetDate());
        			this.dsSearch.setColumn(0, "AM_RECEIPT", 0);

        			this.fnGridSetting();
        		}
        	}
        	else if (svcID == "select2" || svcID == "select3") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if (this.dsList.rowcount > 0) {
        			this.fnGridSetting();
        		}
        		else {
        			this.fnGridRemoveSetting();
        			this.gfnAlert("자료가 존재하지 않습니다.");
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
         this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        	}
        }

        this.fnGridRemoveSetting = function() {
        	this.gfnSetFormStatus(this);
        	this.gfnGridClear(this.dxGrid);

        	this.dsSearch.setColumn(0, "DT_RECEIPT", "");
        	this.dsSearch.setColumn(0, "AM_RECEIPT", 0);
        }

        this.fnGridSetting = function() {
        	if (this.dsList.rowcount <= 0) return;

        	this.dsList.set_enableevent(false);
        	for (var i=0; i<this.dsList.rowcount; i++) {
        		var strNapip = this.dsList.getColumn(i, "TY_NAPIP");
        		switch (strNapip) {
        			case "납부금액":
        			case "미수금":
        			case "합계":
        				this.dsList.setColumn(i, "AM_SELLING", "");
        				this.dsList.setColumn(i, "DD_DAY", 0);
        				break;
        			case "":
        				for (var j=1; j<=11; j++) {
        					if (this.dsList.colinfos[j].name == "DD_DAY")
        						this.dsList.setColumn(i, this.dsList.colinfos[j].name, 0);
        					else
        						this.dsList.setColumn(i, this.dsList.colinfos[j].name, "");
        				}
        				break;
        		}
        	}
        	this.dsList.set_enableevent(true);
        }


        this.divData_btnConf_onclick = function(obj,e) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_RECEIPT"))) {
        		this.fnVaidateCallback = function() {
        			this.tclDT_RECEIPT.setFocus();
        		}
        		this.gfnAlert("수납기준일자를 입력하지 않았습니다!", "fnVaidateCallback");
        	}

        	if (nexacro.toNumber(this.dsSearch.getColumn(0, "AM_RECEIPT")) == 0) {
        		this.fnSelect2();
        	}
        	else if(nexacro.toNumber(this.dsSearch.getColumn(0, "AM_RECEIPT")) > 0) {
        		this.fnSelect3();
        	}
        };

        this.divData_btnExit_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };

        this.divData_btnSelectRowSum_onclick = function(obj,e) {
        	if (this.dsList.rowcount -1 <= 1) return;

        	var amSelling = 0;
        	var amReceipt = 0;
        	var amDiscount = 0;
        	var amDelay = 0;
        	var amBunyang = 0;
        	var bTotal = false;
        	var strBeforeText = "";

        	var rows = this.dxGrid.getSelectedDatasetRows();
        	for (var i=0; i<rows.length; i++) {
        		var nrow = rows[i];
        		if (this.dsList.getColumn(nrow, "TY_NAPIP") == "합계") return;

        		if (!bTotal || strBeforeText != this.dsList.getColumn(nrow, "TY_NAPIP")) {
        			amSelling += nexacro.toNumber(this.dsList.getColumn(nrow, "AM_SELLING"));
        		}

        		amReceipt += nexacro.toNumber(this.dsList.getColumn(nrow, "AM_RECEIPT"));
        		amDiscount += nexacro.toNumber(this.dsList.getColumn(nrow, "AM_DISCOUNT"));
        		amDelay += nexacro.toNumber(this.dsList.getColumn(nrow, "AM_DELAY"));
        		amBunyang += nexacro.toNumber(this.dsList.getColumn(nrow, "AM_BUNYANG"));

        		bTotal = true;
        		strBeforeText = this.dsList.getColumn(nrow, "TY_NAPIP");
        	}

        	if (bTotal) {
        		var lastrow = this.dsList.rowcount-1;
        		if (this.dsList.getColumn(lastrow, "TY_NAPIP") != "합계") {
        			lastrow = this.gfnGridAdd(this.dxGrid, "bottom");
        		}

        		this.dsList.setColumn(lastrow, "AM_SELLING", amSelling);
        		this.dsList.setColumn(lastrow, "AM_RECEIPT", amReceipt);
        		this.dsList.setColumn(lastrow, "AM_DISCOUNT", amDiscount);
        		this.dsList.setColumn(lastrow, "AM_DELAY", amDelay);
        		this.dsList.setColumn(lastrow, "AM_BUNYANG", amBunyang);
        		this.dsList.setColumn(lastrow, "TY_NAPIP", "합계");
        	}

        	this.gfnSetFormStatus(this, "Q");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tclDT_RECEIPT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.btnSelectRowSum.addEventHandler("onclick",this.divData_btnSelectRowSum_onclick,this);
            this.divData.form.btnExit.addEventHandler("onclick",this.divData_btnExit_onclick,this);
            this.divData.form.btnConf.addEventHandler("onclick",this.divData_btnConf_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRQ_DLGESTRECEIPT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
