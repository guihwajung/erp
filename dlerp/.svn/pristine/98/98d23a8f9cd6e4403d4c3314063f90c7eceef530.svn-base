package com.goodcen.cenerp.web.password;

import java.util.TimerTask;

public class ResetUserPasswordAuthContainerCleaner extends TimerTask {
	
	private ResetUserPasswordAuthContainer container;
	
	public ResetUserPasswordAuthContainerCleaner(ResetUserPasswordAuthContainer container) {
		this.container = container;
	}
	
	@Override
	public void run() {
		container.clean();
	}

}
