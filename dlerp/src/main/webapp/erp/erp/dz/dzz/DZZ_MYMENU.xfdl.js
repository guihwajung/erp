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
            this.set_titletext("즐겨찾기");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FOLDER_PARENTS\" type=\"STRING\" size=\"256\"/><Column id=\"FOLDER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_LEVEL\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"P_FOLDER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_MYMENU_SELECT</Col></Row><Row><Col id=\"SP\">DZZPR_MYMENU_DETAIL_INSERT</Col><Col id=\"TARGET\">save</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","20","10","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("즐겨찾기");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divButton",null,"10","190","37","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"5","67","26","0",null,null,null,null,null,this.divButton.form);
            obj.set_taborder("0");
            obj.set_text("폴더관리");
            this.divButton.addChild(obj.name, obj);

            obj = new Div("divData","20","sta01:0",null,"65","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg1","0","0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","0","staBg1:0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staLabel1_00","0","0","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_tablelabelT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staLabel3","0","staLabel1_00:0","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("폴더");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboID_FORM","82","33","198","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsList");
            obj.set_codecolumn("CD_FOLDER");
            obj.set_datacolumn("FOLDER_NAME");
            obj.set_text("cbo00");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNM_FORM","82","3","198","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divButton2","20","110",null,"37","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk",null,"5","67","26","141",null,null,null,null,null,this.divButton2.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divButton2.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,"5","67","26","71",null,null,null,null,null,this.divButton2.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divButton2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZZ_MYMENU.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.fvIsRetrive = false;

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	//this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSelect();

        	var nm_form = this.gfnGetParam('NM_FORM');
        	var arrNm = nm_form.split('>');
        	if (arrNm != null)
        	{
        		this.divData.form.edtNM_FORM.set_value(arrNm[arrNm.length - 1].trim());
        	}
        };

        this.form_onclose = function(obj,e)
        {
        	if (this.fvIsRetrive)
        	{
        		this.gfnClosePopup('retrive');
        	}
        	else
        	{
        		this.gfnClosePopup('close');
        	}
        };

        this.fnSelect = function()
        {
        	var CD_CORP = this.objApp.gdsUserInfo.getColumn(this.objApp.gdsUserInfo.rowposition, 'CD_CORP');
        	var CD_DEPT = this.objApp.gdsUserInfo.getColumn(this.objApp.gdsUserInfo.rowposition, 'CD_DEPT');
        	var ID_USER = this.objApp.gdsUserInfo.getColumn(this.objApp.gdsUserInfo.rowposition, 'ID_USER');

        	this.dsSearch.clearData();

        	var nRow = this.dsSearch.addRow();
        	this.dsSearch.setColumn(nRow, 'CD_CORP', CD_CORP);
        	this.dsSearch.setColumn(nRow, 'CD_DEPT', CD_DEPT);
        	this.dsSearch.setColumn(nRow, 'ID_USER', ID_USER);

        	var strSvcId    = "search";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSearch";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnSave = function()
        {
        	var CD_CORP = this.objApp.gdsUserInfo.getColumn(this.objApp.gdsUserInfo.rowposition, 'CD_CORP');
        	var CD_DEPT = this.objApp.gdsUserInfo.getColumn(this.objApp.gdsUserInfo.rowposition, 'CD_DEPT');
        	var ID_USER = this.objApp.gdsUserInfo.getColumn(this.objApp.gdsUserInfo.rowposition, 'ID_USER');
        	var CD_MODULE = this.gfnGetParam('CD_MODULE');
        	var ID_FORM = this.gfnGetParam('ID_FORM');
        	var NM_FORM = this.divData.form.edtNM_FORM.value;
        	var P_FOLDER = this.divData.form.cboID_FORM.value;

        	this.dsSave.clearData();

        	var nRow = this.dsSave.addRow();
        	this.dsSave.setColumn(nRow, 'CD_CORP', CD_CORP);
        	this.dsSave.setColumn(nRow, 'CD_DEPT', CD_DEPT);
        	this.dsSave.setColumn(nRow, 'ID_USER', ID_USER);
        	this.dsSave.setColumn(nRow, 'CD_MODULE', CD_MODULE);
        	this.dsSave.setColumn(nRow, 'ID_FORM', ID_FORM);
        	this.dsSave.setColumn(nRow, 'P_FOLDER', P_FOLDER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode !== 0)
        	{
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	if (svcID == "search")
        	{
        		this.dsList.insertRow(0);
        		this.dsList.setColumn(0, 'CD_FOLDER', '');
        		this.dsList.setColumn(0, 'FOLDER_NAME', '기본');
        		this.divData.form.cboID_FORM.set_index(0);
        	}
        	else if (svcID == "save")
        	{
        		this.gfnClosePopup('save');
        	}
        };

        this.divButton2_btnOk_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        this.divButton2_btnCancle_onclick = function(obj,e)
        {
        	this.gfnClosePopup('close');
        };

        this.divButton_btnAdd_onclick = function(obj,e)
        {
        	var oArgs = {};
        	var oOption = {
        		'popuptype' : 'modal'
        	};

        	this.gfnOpenPopup('myfolder_pop', 'dzz::DZZ_MYFOLDER.xfdl', oArgs, function(svcId, oRtn) {
        		if (oRtn)
        		{
        			this.fvIsRetrive = true;
        			this.fnSelect();
        		}
        	}, oOption);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.divButton.form.btnAdd.addEventHandler("onclick",this.divButton_btnAdd_onclick,this);
            this.divButton2.form.btnOk.addEventHandler("onclick",this.divButton2_btnOk_onclick,this);
            this.divButton2.form.btnCancle.addEventHandler("onclick",this.divButton2_btnCancle_onclick,this);
        };
        this.loadIncludeScript("DZZ_MYMENU.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
