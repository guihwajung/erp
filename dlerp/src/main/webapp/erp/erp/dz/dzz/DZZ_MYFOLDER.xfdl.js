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
            this.set_titletext("폴더관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,460);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_MYMENU_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DZZPR_MYMENU_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DZZPR_MYMENU_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DZZPR_MYMENU_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInsert", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"FOLDER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FOLDER_PARENTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpdate", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"FOLDER_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDelete", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FOLDER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"nx_flag\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FOLDER_PARENTS\" type=\"STRING\" size=\"256\"/><Column id=\"FOLDER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_LEVEL\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","20","10","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("폴더");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divButton",null,"10","190","37","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"5","67","26","0",null,null,null,null,null,this.divButton.form);
            obj.set_taborder("0");
            obj.set_text("폴더삭제");
            this.divButton.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"5","67","26","btnDel:3",null,null,null,null,null,this.divButton.form);
            obj.set_taborder("1");
            obj.set_text("폴더추가");
            this.divButton.addChild(obj.name, obj);

            obj = new Div("divData","20","sta01:0",null,null,"20","42",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg1","0","0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staLabel1_00","0","0","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("폴더명");
            obj.set_cssclass("sta_WF_tablelabelTE");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("grdTree","0","staBg1:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeuseimage("true");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_scrollbarsize("5");
            obj.set_visible("true");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\" band=\"left\"/><Column size=\"422\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"34\"/></Rows><Band id=\"body\"><Cell text=\"expr:dataset.getRowType(currow) == 2 ? &quot;I&quot; :  (dataset.getRowType(currow) == 4 ? &quot;U&quot;  : (dataset.getRowType(currow) == 8 ? &quot;D&quot; : &quot;&quot;))\" cssclass=\"expr:dataset.getRowType(currow) == 2 ? &quot;insert&quot; :  (dataset.getRowType(currow) == 4 ? &quot;update&quot;  : (dataset.getRowType(currow) == 8 ? &quot;delete&quot; : &quot;&quot;))\"/><Cell col=\"1\" edittype=\"tree\" cssclass=\"expr:TY_MENU!=&quot;메뉴&quot; ? &quot;&quot; : NO_LEVEL==1 ? &quot;level0&quot; : NO_LEVEL==2 ? &quot;level1&quot; : NO_LEVEL==3 ?  &quot;level2&quot; : NO_LEVEL==4 ?  &quot;level3&quot; : &quot;&quot;\" treestartlevel=\"0\" treelevel=\"bind:NO_LEVEL\" textAlign=\"left\" displaytype=\"treeitemcontrol\" text=\"bind:FOLDER_NAME\" tooltiptext=\"bind:FOLDER_NAME\"/><Cell col=\"2\" displaytype=\"none\" text=\"bind:TY_MENU\"/><Cell col=\"3\" displaytype=\"none\" text=\"bind:CD_MODULE\"/><Cell col=\"4\" displaytype=\"none\" text=\"bind:ID_FORM\"/></Band></Format></Formats>");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtFOLDER_NAME","82","3","368","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divButton2","20",null,null,"37","20","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,"5","67","26","0",null,null,null,null,null,this.divButton2.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.divButton2.addChild(obj.name, obj);

            obj = new Button("btnOk",null,"5","67","26","btnCancle:5",null,null,null,null,null,this.divButton2.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            this.divButton2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtFOLDER_NAME","value","dsList","FOLDER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZZ_MYFOLDER.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.fvIsRetrive = false;

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	//this.gfnFormOnLoad(this);
        	//this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSelect();
        };

        this.form_onclose = function(obj,e)
        {
        	this.gfnClosePopup(this.fvIsRetrive);
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

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i=0; i<this.dsList.rowcount; i++)
        	{
        		var CD_FOLDER = this.dsList.getColumn(i, 'CD_FOLDER');
        		var CD_FOLDER_PARENTS = this.dsList.getColumn(i, 'CD_FOLDER_PARENTS');
        		var FOLDER_NAME = this.dsList.getColumn(i, 'FOLDER_NAME');

        		if (this.dsList.getRowType(i) == Dataset.ROWTYPE_INSERT && this.dsList.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			if (this.gfnIsNull(FOLDER_NAME))
        			{
        				this.gfnAlert('폴더명은 필수입니다.');
        				return false;
        			}
        		}

        		switch (this.dsList.getRowType(i))
        		{
        			case Dataset.ROWTYPE_INSERT :
        				var nRow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nRow, 'CD_CORP', CD_CORP);
        				this.dsInsert.setColumn(nRow, 'CD_DEPT', CD_DEPT);
        				this.dsInsert.setColumn(nRow, 'ID_USER', ID_USER);
        				this.dsInsert.setColumn(nRow, 'CD_FOLDER', CD_FOLDER);
        				this.dsInsert.setColumn(nRow, 'CD_FOLDER_PARENTS', CD_FOLDER_PARENTS);
        				this.dsInsert.setColumn(nRow, 'FOLDER_NAME', FOLDER_NAME);
        				break;
        			case Dataset.ROWTYPE_UPDATE :
        				var nRow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nRow, 'CD_CORP', CD_CORP);
        				this.dsUpdate.setColumn(nRow, 'CD_DEPT', CD_DEPT);
        				this.dsUpdate.setColumn(nRow, 'ID_USER', ID_USER);
        				this.dsUpdate.setColumn(nRow, 'CD_FOLDER', CD_FOLDER);
        				this.dsUpdate.setColumn(nRow, 'FOLDER_NAME', FOLDER_NAME);
        				break;
        			case Dataset.ROWTYPE_DELETE :
        				var nRow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nRow, 'CD_CORP', CD_CORP);
        				this.dsDelete.setColumn(nRow, 'CD_DEPT', CD_DEPT);
        				this.dsDelete.setColumn(nRow, 'ID_USER', ID_USER);
        				this.dsDelete.setColumn(nRow, 'CD_FOLDER', CD_FOLDER);
        				break;
        		}
        	}

        	var arrIndData = [];
        	if (this.dsInsert.rowcount > 0) arrIndData.push("insert=dsInsert");
        	if (this.dsUpdate.rowcount > 0) arrIndData.push("update=dsUpdate");
        	if (this.dsDelete.rowcount > 0) arrIndData.push("delete=dsDelete");
        	if (arrIndData.length == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = arrIndData.join(' ');
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
        		this.dsList.setColumn(0, 'NO_LEVEL', 0);
        		this.dsList.setColumn(0, 'CD_FOLDER', '');
        		this.dsList.setColumn(0, 'FOLDER_NAME', '기본');
        		this.dsList.applyChange();
        	}
        	else if (svcID == "save")
        	{
        		this.fvIsRetrive = true;
        		this.fnSelect();
        	}
        };

        this.divButton_btnAdd_onclick = function(obj,e)
        {
        	var nParents = this.dsList.rowposition;
        	var CD_FOLDER = this.dsList.getColumn(nParents, 'CD_FOLDER');
        	var NO_LEVEL = this.dsList.getColumn(nParents, 'NO_LEVEL');

        	if (this.divData.form.grdTree.isTreeRootRow(nParents) || (!this.gfnIsNull(CD_FOLDER) && NO_LEVEL < 3))
        	{
        		var nRow = this.dsList.insertRow(nParents + 1);
        		this.dsList.setColumn(nRow, 'CD_FOLDER_PARENTS', CD_FOLDER);
        		this.dsList.setColumn(nRow, 'NO_LEVEL', NO_LEVEL + 1);
        		this.divData.form.edtFOLDER_NAME.setFocus();
        	}
        };

        this.divButton_btnDel_onclick = function(obj,e)
        {
        	this.dsList.set_updatecontrol(false);

        	var nCurRow = this.dsList.rowposition;

        	if (!this.divData.form.grdTree.isTreeRootRow(nCurRow))
        	{
        		var nCnt = this.divData.form.grdTree.getTreeChildCount(nCurRow);

        		if (nCnt > 0)
        		{
        			var nOffset = this.divData.form.grdTree.getTreeSiblingRow( nCurRow );

        			if (nOffset == -1)
        			{
        				var nParents = this.divData.form.grdTree.getTreeParentRow( nCurRow );
        				nOffset = this.divData.form.grdTree.getTreeSiblingRow( nParents );
        			}

        			if (nOffset == -1)
        			{
        				nOffset = this.dsList.rowcount;
        			}

        			for (var i = nCurRow; i < nOffset; i++)
        			{
        				this.dsList.setRowType(i, Dataset.ROWTYPE_DELETE);
        			}
        		}
        		else
        		{
        			this.dsList.setRowType(nCurRow, Dataset.ROWTYPE_DELETE);
        		}
        	}

        	this.dsList.set_updatecontrol(true);
        };



        this.divButton2_btnCancle_onclick = function(obj,e)
        {
        	this.gfnClosePopup(this.fvIsRetrive );
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.divButton.form.btnDel.addEventHandler("onclick",this.divButton_btnDel_onclick,this);
            this.divButton.form.btnAdd.addEventHandler("onclick",this.divButton_btnAdd_onclick,this);
            this.divButton2.form.btnCancle.addEventHandler("onclick",this.divButton2_btnCancle_onclick,this);
            this.divButton2.form.btnOk.addEventHandler("onclick",this.fnSave,this);
        };
        this.loadIncludeScript("DZZ_MYFOLDER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
