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
                this._setFormPosition(320,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00","10","20","80","14",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("From 시스템");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","10","sta00:15","80","14",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("From 그리드ID");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","sta01:15","80","14",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("To 시스템");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","sta02:15","80","14",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("To 그리드ID");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","95","150","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm","0","0","60","21",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnConfirm:10","0","60","21",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Edit("txtCD_SYSTEM_FR","105","17","205","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("txtID_GRID_FR","105","46","205","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("cfCD_SYSTEM_TO","105","75","205","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DZX_CFSYSTEM");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.addChild(obj.name, obj);

            obj = new Edit("txtID_GRID_TO","105","104","205","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ccfCD_SYSTEM.form.CDTextBox","value","dsSearch","CD_SYSTEM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DXX_NXGRIDINFO_COPY.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SYSTEM) && !this.gfnIsNull(this.getOwnerFrame().ID_GRID)) {
        		this.txtCD_SYSTEM_FR.set_value(this.getOwnerFrame().CD_SYSTEM);
        		this.txtID_GRID_FR.set_value(this.getOwnerFrame().ID_GRID);
        		this.cfCD_SYSTEM_TO.form.CDTextBox.set_value(this.getOwnerFrame().CD_SYSTEM);
        		this.cfCD_SYSTEM_TO.form.DSTextBox.set_value(this.getOwnerFrame().DS_SYSTEM);
        	} else {
        		this.getParentContext().close(false);
        	}
        };

        this.div00_btnConfirm_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.cfCD_SYSTEM_TO.form.CDTextBox.value)) {
        		this.gfnAlert("To 시스템을 입력하세요.");
        		return;
        	}
        	if(this.gfnIsNull(this.txtID_GRID_TO.value)) {
        		this.gfnAlert("To 그리드ID를 입력하세요.");
        		return;
        	}
        	var json = {};
        	json.CD_SYSTEM_FR = this.txtCD_SYSTEM_FR.value;
        	json.ID_GRID_FR = this.txtID_GRID_FR.value;
        	json.CD_SYSTEM_TO = this.cfCD_SYSTEM_TO.form.CDTextBox.value;
        	json.ID_GRID_TO = this.txtID_GRID_TO.value;

        	this.getParentContext().close(JSON.stringify(json));
        };

        this.div00_btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnConfirm.addEventHandler("onclick",this.div00_btnConfirm_onclick,this);
            this.divBtns.form.btnCancel.addEventHandler("onclick",this.div00_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DXX_NXGRIDINFO_COPY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
