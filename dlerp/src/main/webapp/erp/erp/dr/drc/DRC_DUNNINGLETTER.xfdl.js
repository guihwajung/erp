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
            obj._setContents("<ColumnInfo><Column id=\"DS_CONTRACTOR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ADDRESS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRCPR_DUNNING_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRCPR_DUNNING_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TITLE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">독촉장</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">최고장</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","30%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("독촉장");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divSplitter2","0","sta01:5","100%","5",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_background("blue");
            obj.set_cursor("ns-resize");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staSunapInfo","5","sta01:10",null,"22","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("37");
            obj.set_text("수신인정보");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("staSunapSplitter","0","staSunapInfo:5","600","5",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta02","0","staSunapInfo:13","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","staSunapInfo:13",null,"30","680",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR_ADDR","sta02:5","sta02:-25","489","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta02:-1","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta05","sta02:-1","sta02:-1",null,"30","680",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","sta02:5","sta04:-25","170","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta04:-1","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta07","sta04:-1","sta04:-1",null,"30","680",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_JUMIN","sta04:5","sta06:-25","170","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta06:-1","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("재산의표시");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta09","sta06:-1","sta06:-1",null,"30","680",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_ADDRESS","sta06:5","sta08:-25","230","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_DONG","txtDS_ADDRESS:5","sta08:-25","50","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta10","txtNO_DONG:5","sta08:-25","20","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_text("동");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_FLOOR","sta10:5","sta08:-25","50","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta11","txtNO_FLOOR:5","sta08:-25","20","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_text("층");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_HO","sta11:5","sta08:-25","50","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta12","txtNO_HO:5","sta08:-25","20","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_text("호");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","0","0",null,"22","btnTest:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("독촉장내용");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta14","0","sta13:13","87","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("17");
            obj.set_text("독촉장종류");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta13:13",null,"30","680",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Combo("cboTY_TITLE","sta14:5","sta14:-25","120","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("33");
            obj.set_innerdataset("dsTY_TITLE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("독촉장");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new TextArea("txtDS_COMMENT","0","cboTY_TITLE:8","1275","316",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("56");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divDataTop.form.txtDS_CONTRACTOR_ADDR","value","dsList","DS_CONTRACTOR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataTop.form.txtDS_CONTRACTOR","value","dsList","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataTop.form.txtNO_JUMIN","value","dsList","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataTop.form.txtDS_ADDRESS","value","dsList","DS_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.txtNO_DONG","value","dsList","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataTop.form.txtNO_FLOOR","value","dsList","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.txtNO_HO","value","dsList","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.cboTY_TITLE","value","dsList","TY_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.txtDS_COMMENT","value","dsList","DS_COMMENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DRC_DUNNINGLETTER.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	trace("this.getOwnerFrame().CD_ACNTUNIT=====>", this.getOwnerFrame().CD_ACNTUNIT);
        	this.CD_ACNTUNIT = this.getOwnerFrame().CD_ACNTUNIT;
        	this.NO_DONG = this.getOwnerFrame().NO_DONG;
        	this.NO_FLOOR = this.getOwnerFrame().NO_FLOOR;
        	this.NO_HO = this.getOwnerFrame().NO_HO;
        	this.NO_UNIONMEMBER = this.getOwnerFrame().NO_UNIONMEMBER;
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.txtDS_CONTRACTOR_ADDR = this.divData.form.divDataTop.form.txtDS_CONTRACTOR_ADDR;
        	this.txtDS_CONTRACTOR = this.divData.form.divDataTop.form.txtDS_CONTRACTOR;
        	this.txtNO_JUMIN = this.divData.form.divDataTop.form.txtNO_JUMIN;
        	this.txtDS_ADDRESS = this.divData.form.divDataTop.form.txtDS_ADDRESS;
        	this.txtNO_DONG = this.divData.form.divDataTop.form.txtNO_DONG;
        	this.txtNO_FLOOR = this.divData.form.divDataTop.form.txtNO_FLOOR;
        	this.txtNO_HO = this.divData.form.divDataTop.form.txtNO_HO;
        	this.cboTY_TITLE = this.divData.form.divDataTop.form.cboTY_TITLE;
        	this.txtDS_COMMENT = this.divData.form.divDataTop.form.xtDS_COMMENT;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");
        	this.dsSelect.addColumn("NO_UNIONMEMBER", "string");
        	this.dsSelect.addColumn("YN_OPTION", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("YN_OPTION", "string");
        	this.dsUpdate.addColumn("DS_ADDRESS", "string");
        	this.dsUpdate.addColumn("DS_COMMENT", "string");
        	this.dsUpdate.addColumn("DS_REQUEST", "string");
        	this.dsUpdate.addColumn("DS_REQUEST_BANK", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        };

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelect.setColumn(0, "YN_OPTION", this.dsSearch.getColumn(0, "YN_OPTION"));

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
        	this.dsList.setColumn(0, "DS_ADDRESS", "");
        	this.dsList.setColumn(0, "DS_COMMENT", "");
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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsList.getColumn(i, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN").substr(6, 1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(i, "NO_CHASU").substr(7, 2));
        				this.dsUpdate.setColumn(nrow, "YN_OPTION", this.dsList.getColumn(i, "YN_OPTION"));
        				this.dsUpdate.setColumn(nrow, "DS_ADDRESS", this.dsList.getColumn(i, "DS_ADDRESS").Trim());
        				this.dsUpdate.setColumn(nrow, "DS_COMMENT", this.dsList.getColumn(i, "DS_COMMENT").Trim());
        				//this.dsUpdate.setColumn(nrow, "DS_REQUEST", this.dsList.getColumn(i, "DS_REQUEST"));
        				//this.dsUpdate.setColumn(nrow, "DS_REQUEST_BANK", this.dsList.getColumn(i, "DS_REQUEST_BANK"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
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

        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }


        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {

        // 		trace("주민등록번호포맷" , this.dsList.getColumn(0, "NO_JUMIN").substr(0, 6) + "-" + this.dsList.getColumn(0, "NO_JUMIN").substr(6));
        // 		if(this.dsList.getColumn(0, "NO_JUMIN").Trim().Lenghth == 13){
        // 			this.dsList.setColumn(this.dsList.getColumn(0, "NO_JUMIN").substr(0, 6) + "-" + this.dsList.getColumn(0, "NO_JUMIN").substr(6));
        // 		}

        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

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
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DRC_DUNNINGLETTER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
