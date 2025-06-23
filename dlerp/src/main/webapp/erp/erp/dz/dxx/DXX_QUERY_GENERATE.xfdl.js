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
            if (Form == this.constructor)
            {
                this._setFormPosition(1130,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">loadsp</Col><Col id=\"SP\">DZZPR_SPHELP_SELECT</Col></Row><Row><Col id=\"TARGET\">realsp</Col><Col id=\"SP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSPInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSPSpec", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSP", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSP2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","34","18","537","304",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("sta03_02","10","177","80","14",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("save_SP");
            this.div00.addChild(obj.name, obj);

            obj = new Div("divBtns","115","270","207","21",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnConfirm","0","0","60","21",null,null,null,null,null,null,this.div00.form.divBtns.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.div00.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnConfirm:10","0","60","21",null,null,null,null,null,null,this.div00.form.divBtns.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.div00.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnReset","140","0","60","21",null,null,null,null,null,null,this.div00.form.divBtns.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            this.div00.form.divBtns.addChild(obj.name, obj);

            obj = new Static("sta03_01","10","147","80","14",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("update_SP");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta03_00","10","117","80","14",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("delete_SP");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta03","10","87","80","14",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("insert_SP");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta02","10","58","80","14",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("select_SP");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta03_02_00","10","207","80","14",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("print_SP");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("txtSelectSP","87","56","205","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("dsSearch");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("txtInsertSP","87","86","205","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("txtDeleteSP","87","116","205","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("txtUpdateSP","87","146","205","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("txtSaveSP","87","176","205","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("txtPringSP","87","205","205","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("txtdsSelect","296","55","85","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_value("dsSelect");
            obj.set_text("dsSelect");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("txtdsInsert","296","85","85","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_value("dsInsert");
            obj.set_text("dsInsert");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("txtdsDelete","296","115","85","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_value("dsDelete");
            obj.set_text("dsDelete");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("txtdsUpdate","296","145","85","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_value("dsUpdate");
            obj.set_text("dsUpdate");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("txtdsSave","296","175","85","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_value("dsSave");
            obj.set_text("dsSave");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("txtdsPrint","296","205","85","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_value("dsPrint");
            obj.set_text("dsPrint");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkSingle","391","51","137","27",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("싱글폼");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta03_02_00_00","10","237","80","14",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("approval_SP");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("txtApprovalSP","87","235","205","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("txtdsApproval","296","235","85","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_value("NewDataSet");
            obj.set_text("NewDataSet");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01","20","30","50.00%","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("GENERATE NEXACRO 개발도구");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtResult1","3","330","50%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtResult","txtResult1:3","11",null,"350","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtResult2","txtResult1:3","txtResult:1",null,null,"5","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","txtResult1","value","dsList","DS_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","txtResult2","value","dsList","DS_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","txtResult","value","dsList","DS_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DXX_QUERY_GENERATE.xfdl", function() {

        this.form_onload = function(obj,e)
        {

        	this.fnSetParameter();

        	this.addColumnResult = "";
        	this.setColumnResult = "";
        	this.ColumnInfoResult = "";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsLoadSP = new Dataset();
        	this.dsLoadSP.addColumn("SPNAME", "string");

        	this.txtSelectSP = this.div00.form.txtSelectSP;
        	this.txtInsertSP = this.div00.form.txtInsertSP;
        	this.txtDeleteSP = this.div00.form.txtDeleteSP;
        	this.txtUpdateSP = this.div00.form.txtUpdateSP;
        	this.txtSaveSP = this.div00.form.txtSaveSP;
        	this.txtPringSP = this.div00.form.txtPringSP;
        	this.txtdsSelect = this.div00.form.txtdsSelect;
        	this.txtdsInsert = this.div00.form.txtdsInsert;
        	this.txtdsDelete = this.div00.form.txtdsDelete;
        	this.txtdsUpdate = this.div00.form.txtdsUpdate;
        	this.txtdsSave = this.div00.form.txtdsSave;
        	this.txtdsPrint = this.div00.form.txtdsPrint;
        	this.chkSingle = this.div00.form.chkSingle;
        	this.txtApprovalSP = this.div00.form.txtApprovalSP;
        	this.txtdsApproval = this.div00.form.txtdsApproval;

        }

        this.div00_btnConfirm_onclick = function(obj,e)
        {

        	if(this.gfnIsNull(this.txtSelectSP.value) && this.gfnIsNull(this.txtInsertSP.value) && this.gfnIsNull(this.txtDeleteSP.value)
        		&& this.gfnIsNull(this.txtUpdateSP.value) && this.gfnIsNull(this.txtSaveSP.value) && this.gfnIsNull(this.txtPringSP.value)
        		&& this.gfnIsNull(this.txtApprovalSP.value)) {
        		this.gfnAlert("SP명을 입력하세요.");
        		return false;
        	}
        	this.addColumnResult = "";
        	this.setColumnResult = "";
        	this.ColumnInfoResult = "";

        	if (!this.gfnIsNull(this.txtSelectSP.value))
        	{
        		this.fnSelectSP(this.txtSelectSP.value , this.txtdsSelect.value);
        	}

        	if (!this.gfnIsNull(this.txtInsertSP.value))
        	{
        		this.fnSelectSP(this.txtInsertSP.value , this.txtdsInsert.value);
        	}
        	if (!this.gfnIsNull(this.txtDeleteSP.value))
        	{
        		this.fnSelectSP(this.txtDeleteSP.value , this.txtdsDelete.value);
        	}
        	if (!this.gfnIsNull(this.txtUpdateSP.value))
        	{
        		this.fnSelectSP(this.txtUpdateSP.value , this.txtdsUpdate.value);
        	}
        	if (!this.gfnIsNull(this.txtSaveSP.value))
        	{
        		this.fnSelectSP(this.txtSaveSP.value , this.txtdsSave.value);
        	}
        	if (!this.gfnIsNull(this.txtPringSP.value))
        	{
        		this.fnSelectSP(this.txtPringSP.value , this.txtdsPrint.value);
        	}

        	if (!this.gfnIsNull(this.txtApprovalSP.value))
        	{
        		this.fnSelectSP(this.txtApprovalSP.value , this.txtdsApproval.value);
        	}


        };


        this.fnSelectSP = function(vSpName , vDsName)
        {

        	this.dsLoadSP.clearData();
        	this.dsLoadSP.addRow();

        	this.dsLoadSP.setColumn(0, "SPNAME", vSpName);
        	this._dsProc.setColumn(1, "SP", vSpName);

        	this.DatasetName = vDsName;

        	var strSvcId    = "select_" + vDsName ;
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "loadsp=dsLoadSP";
        	var outData     = "dsSPInfo=loadsp0 dsSPSpec=loadsp1";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackLoadSP";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnCallbackLoadSP = function(strId, val) {
        	if(strId.substr(0,6) == "select") {
        		for(var i = 0; i < this.dsSPInfo.rowcount; i++) {
        			if(this.dsSPInfo.getColumn(i, "Type") == "stored procedure") {

        				if(this.dsSPSpec.rowcount > 0) {
        					this.addColumnResult = this.addColumnResult + "--------------------------------------------------\n dataset addColumn :  "+ strId.substr(7) + "\n\n" ;
        					this.setColumnResult = this.setColumnResult + "--------------------------------------------------\n dataset setColumn :  "+ strId.substr(7) + "\n\n" ;


        					// trace("dsSPSpec =>" + this.dsSPSpec.saveXML());

        					for(var j = 0; j < this.dsSPSpec.rowcount; j++) {
        						var pname = this.dsSPSpec.getColumn(j, "Parameter_name");
        						var ptype = this.dsSPSpec.getColumn(j, "Type");

        						trace(" ptype=>" + ptype);
        						var vType = (ptype=="varchar" || ptype=="char") ? "string" : "bigint" ;
        						if( pname == "NOT_PARAM" ) break;

        						this.addColumnResult += '	this.' + strId.substr(7) + '.addColumn("'+ pname.replace("@", "") + '", "'+ vType +'"); \n';

        						if ( pname.replace("@", "") != "ID_USER" )
        						{ this.setColumnResult += '		this.' + strId.substr(7) + '.setColumn('+ (strId.substr(7) =="dsSelect" ? "0" : "nrow") +', "'+ pname.replace("@", "") + '", this.'+ (strId.substr(7) =="dsSelect" ? "dsSearch" : "dsList") +'.getColumn('+ (strId.substr(7) =="dsSelect" ? "0" : "i") +', "'+ pname.replace("@", "") + '")); \n';
        						} else
        						{ this.setColumnResult += '		this.' + strId.substr(7) + '.setColumn('+ (strId.substr(7) =="dsSelect" ? "0" : "nrow") +', "'+ pname.replace("@", "") + '", this.AuthClient.ID_USER); \n'; }
        					}

        					this.txtResult.set_value(this.addColumnResult);
        					this.txtResult1.set_value(this.setColumnResult);
        					this.txtResult2.set_value(this.ColumnInfoResult);

        				    if (this.chkSingle.value && strId.substr(7) == this.txtdsSelect.value)
        					{
        						this._dsProc.setColumn(1, "SP", this.txtSelectSP.value);
        						this.fnRealsp("realsp");
        					}

        					if (strId.substr(7) == this.txtdsPrint.value )
        					{
        						this.fnRealsp("printsp");
        					}

        					if (strId.substr(7) == this.txtdsApproval.value )
        					{
        						this.fnRealsp("approvalsp");
        					}
        				}
        			}
        		}
        	}
        	else if(strId == "printsp") {

        		this.ColumnInfoResult = this.ColumnInfoResult + "\n--------------------------------------------------\n 출력용 json Column  \n\n" ;
        		this.ColumnInfoResult = this.ColumnInfoResult + '{"Data1":'
        		//trace(" dsListSP =>" + this.dsListSP.saveXML());

        		var json = {};

        		for(var i = 0; i < this.dsListSP.colinfos.length; i++) {
        			if (this.dsListSP.rowcount == 0)
        			{
        				if (this.dsListSP.colinfos[i].type == "datetime" || this.dsListSP.colinfos[i].type == "string")
        				{
        					var value = "";
        				} else {
        					var value = 0;
        				}
        			} else {
        				var value = this.dsListSP.getColumn(0, this.dsListSP.colinfos[i].name) == undefined ? "" : this.dsListSP.getColumn(0, this.dsListSP.colinfos[i].name);
        			}
        			json[`${this.dsListSP.colinfos[i].name}`] = value;
        			//trace(" JSON=>" + i + ":" + this.dsListSP.colinfos[i].name + ":" + value);

        			//trace(" JSON=>" +  JSON.stringify(json).replace("[", "[{").replace("]", "}]}").replaceAll('{"hi":', "").replaceAll(',"lo":0}', "") );
        		}

        		this.ColumnInfoResult = this.ColumnInfoResult + JSON.stringify(json).replace("[", "[{").replace("]", "}]}").replaceAll('{"hi":', "").replaceAll(',"lo":0}', "");

        		this.txtResult2.set_value(this.ColumnInfoResult);
        	}
        	else if (strId == "approvalsp") {
        		this.ColumnInfoResult = this.ColumnInfoResult + "\n--------------------------------------------------\n 전자결재용   \n\n" ;
        		this.ColumnInfoResult = this.ColumnInfoResult + '<?xml version="1.0" encoding="UTF-8"?>\n'
        		this.ColumnInfoResult = this.ColumnInfoResult + '<'+ this.txtdsApproval.value + '>\n'
        		trace(" dsListSP =>" + this.dsListSP.saveXML());

        		this.ColumnInfoResult = this.ColumnInfoResult + '<table_1>'
        		if (this.dsListSP.rowcount > 0){
        			for (var j = 0; j < this.dsListSP.rowcount; j++) {
        				this.ColumnInfoResult = this.ColumnInfoResult + '<item>'
        				for(var i = 0; i < this.dsListSP.colinfos.length; i++) {
        					var value = '';
        					if (this.dsListSP.getColumn(0, this.dsListSP.colinfos[i].name)== undefined)
        					{
        						value = '<' +  this.dsListSP.colinfos[i].name + '></' +  this.dsListSP.colinfos[i].name + '>'
        					} else {
        						value = '<' +  this.dsListSP.colinfos[i].name + '>'+ this.dsListSP.getColumn(j, this.dsListSP.colinfos[i].name) + '</' +  this.dsListSP.colinfos[i].name + '>'
        					}
        					this.ColumnInfoResult = this.ColumnInfoResult + value;
        				}
        				this.ColumnInfoResult = this.ColumnInfoResult + '</item>'
        			}

        		} else {
        			this.ColumnInfoResult = this.ColumnInfoResult + '<item>'
        			for(var i = 0; i < this.dsListSP.colinfos.length; i++) {
        				var value = '';
        				value = '<' +  this.dsListSP.colinfos[i].name + '></' +  this.dsListSP.colinfos[i].name + '>'
        			}
        			this.ColumnInfoResult = this.ColumnInfoResult + '</item>'
        		}
        		this.ColumnInfoResult = this.ColumnInfoResult + '</table_1>'

        		if (this.dsListSP2.colinfos.length > 0 )
        		{
        			this.ColumnInfoResult = this.ColumnInfoResult + '<table_2><item>'
        			for(var i = 0; i < this.dsListSP2.colinfos.length; i++) {
        				var value = '';
        				if (this.dsListSP2.rowcount == 0)
        				{
        					value = '<' +  this.dsListSP2.colinfos[i].name + '></' +  this.dsListSP2.colinfos[i].name + '>'
        				} else {
        					//value = '<' +  this.dsListSP2.colinfos[i].name + '>'+ this.dsListSP2.getColumn(0, this.dsListSP2.colinfos[i].name) == undefined ? "" : this.dsListSP2.getColumn(0, this.dsListSP2.colinfos[i].name) + '</' +  this.dsListSP2.colinfos[i].name + '>'
        					value = '<' +  this.dsListSP2.colinfos[i].name + '>'+ this.dsListSP2.getColumn(0, this.dsListSP2.colinfos[i].name) + '</' +  this.dsListSP2.colinfos[i].name + '>'
        				}
        				this.ColumnInfoResult = this.ColumnInfoResult + value;
        			}
        			this.ColumnInfoResult = this.ColumnInfoResult + '</item></table_2>'
        		}

        		this.ColumnInfoResult = this.ColumnInfoResult + '</'+ this.txtdsApproval.value + '>\n'
        		this.txtResult2.set_value(this.ColumnInfoResult);
        	}

        	else if(strId == "realsp") {

        		this.ColumnInfoResult = this.ColumnInfoResult + "--------------------------------------------------\n 싱글폼 ColumnInfo  \n\n" ;

        		trace(" dsListSP =>" + this.dsListSP.saveXML());


        		for(var i = 0; i < this.dsListSP.colinfos.length; i++) {
        			var cName = this.dsListSP.colinfos[i].name;
        			var cType = this.dsListSP.colinfos[i].type;
        			var pType = (cType == "datetime" || cType == "string") ? "STRING" : cType ;

        			this.ColumnInfoResult = this.ColumnInfoResult +'		<Column id="' + this.dsListSP.colinfos[i].name +'" type="'+ pType + '" size="256"/> \n'
        			//<Column id="CD_DEPT_SELFACNT" type="STRING" size="256"/>
        		}
        		this.txtResult2.set_value(this.ColumnInfoResult);
        	}


        // 	{
        // "Data1": [
        //     {
        //       "DS_JOBTYPE": "개발",
        //       "DS_ADDRESS": null,
        }

        this.fnRealsp = function (pSvcID)
        {
        	this.dsRealSP = new Dataset();

        	for(var j = 0; j < this.dsSPSpec.rowcount; j++) {
        		var pname = this.dsSPSpec.getColumn(j, "Parameter_name");
        		if(pname == "NOT_PARAM") break;
        		this.dsRealSP.addColumn(pname.replace("@", ""), "string");
        	}

        	this.dsRealSP.addRow();
        	for(var j = 0; j < this.dsSPSpec.rowcount; j++) {
        		var pname = this.dsSPSpec.getColumn(j, "Parameter_name");
        		if(pname == "NOT_PARAM") break;
        		this.dsRealSP.setColumn(0, pname.replace("@", ""), "");
        	}

        	if(this.dsRealSP.rowcount == 0) return;

        	var strSvcId    = pSvcID ;
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "realsp=dsRealSP";
        	var outData     = "dsListSP=realsp0 dsListSP2=realsp1";
        	var strArg      = "meta=Y";
        	var callBackFnc = "fnCallbackLoadSP";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        };


        this.div00_btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };


        this.div00_divBtns_btnReset_onclick = function(obj,e)
        {
        	this.fnReset();
        };

        this.fnReset = function(){
        	this.txtResult.set_value();
        	this.txtResult1.set_value();
        	this.txtResult2.set_value();

        	this.txtSelectSP.set_value();
        	this.txtInsertSP.set_value();
        	this.txtDeleteSP.set_value();
        	this.txtUpdateSP.set_value();
        	this.txtSaveSP.set_value();
        	this.txtPringSP.set_value();
        }

        this.txtItem_onchanged = function(obj,e)
        {
        	this.txtResult.set_value();
        	this.txtResult1.set_value();
        	this.txtResult2.set_value();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div00.form.divBtns.form.btnConfirm.addEventHandler("onclick",this.div00_btnConfirm_onclick,this);
            this.div00.form.divBtns.form.btnCancel.addEventHandler("onclick",this.div00_btnCancel_onclick,this);
            this.div00.form.divBtns.form.btnReset.addEventHandler("onclick",this.div00_divBtns_btnReset_onclick,this);
            this.div00.form.sta03_02_00.addEventHandler("onclick",this.sta03_02_00_onclick,this);
            this.div00.form.txtSelectSP.addEventHandler("onchanged",this.txtItem_onchanged,this);
            this.div00.form.txtInsertSP.addEventHandler("onchanged",this.txtItem_onchanged,this);
            this.div00.form.txtDeleteSP.addEventHandler("onchanged",this.txtItem_onchanged,this);
            this.div00.form.txtUpdateSP.addEventHandler("onchanged",this.txtItem_onchanged,this);
            this.div00.form.txtSaveSP.addEventHandler("onchanged",this.txtItem_onchanged,this);
            this.div00.form.txtPringSP.addEventHandler("onchanged",this.txtItem_onchanged,this);
            this.div00.form.sta03_02_00_00.addEventHandler("onclick",this.sta03_02_00_onclick,this);
            this.div00.form.txtApprovalSP.addEventHandler("onchanged",this.txtItem_onchanged,this);
        };
        this.loadIncludeScript("DXX_QUERY_GENERATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
