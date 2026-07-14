const CustomAlert = {
    init: function() {
        if (document.getElementById('custom-alert-overlay')) return;
        
        const style = document.createElement('style');
        style.innerHTML = `
            #custom-alert-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.2s ease, visibility 0.2s ease;
            }
            #custom-alert-overlay.active {
                opacity: 1;
                visibility: visible;
            }
            #custom-alert-box {
                background: #ffffff;
                border-radius: 20px;
                padding: 40px 30px;
                width: 90%;
                max-width: 400px;
                text-align: center;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                transform: scale(0.9);
                transition: transform 0.2s ease;
            }
            #custom-alert-overlay.active #custom-alert-box {
                transform: scale(1);
            }
            #custom-alert-icon-container {
                width: 60px;
                height: 60px;
                margin: 0 auto 20px auto;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            #custom-alert-icon {
                font-size: 56px;
                color: #f59e0b;
                font-variation-settings: 'FILL' 1;
            }
            #custom-alert-title {
                font-family: 'Inter', sans-serif;
                font-size: 20px;
                font-weight: 500;
                color: #212529;
                margin-bottom: 24px;
                white-space: pre-line;
            }
            #custom-alert-input {
                width: 100%;
                padding: 12px 16px;
                border-radius: 12px;
                border: 1px solid #ced4da;
                font-family: 'Inter', sans-serif;
                font-size: 15px;
                margin-bottom: 24px;
                outline: none;
                transition: border-color 0.2s;
                display: none;
                box-sizing: border-box;
            }
            #custom-alert-input:focus {
                border-color: #556b4e;
            }
            #custom-alert-btn-confirm {
                background: #343a40;
                color: #ffffff;
                border: none;
                border-radius: 12px;
                padding: 14px 24px;
                font-family: 'Inter', sans-serif;
                font-size: 15px;
                font-weight: 600;
                width: 100%;
                cursor: pointer;
                transition: opacity 0.2s;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }
            #custom-alert-btn-confirm:hover {
                opacity: 0.9;
            }
            #custom-alert-btn-cancel {
                background: transparent;
                color: #6c757d;
                border: none;
                margin-top: 16px;
                font-family: 'Inter', sans-serif;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: color 0.2s;
            }
            #custom-alert-btn-cancel:hover {
                color: #495057;
            }
        `;
        document.head.appendChild(style);

        const overlay = document.createElement('div');
        overlay.id = 'custom-alert-overlay';
        overlay.innerHTML = `
            <div id="custom-alert-box">
                <div id="custom-alert-icon-container">
                    <span id="custom-alert-icon" class="material-symbols-outlined">warning</span>
                </div>
                <div id="custom-alert-title"></div>
                <input id="custom-alert-input" type="text" autocomplete="off" />
                <button id="custom-alert-btn-confirm"></button>
                <button id="custom-alert-btn-cancel">Batalkan</button>
            </div>
        `;
        document.body.appendChild(overlay);

        this.overlay = overlay;
        this.titleEl = document.getElementById('custom-alert-title');
        this.inputEl = document.getElementById('custom-alert-input');
        this.iconEl = document.getElementById('custom-alert-icon');
        this.btnConfirm = document.getElementById('custom-alert-btn-confirm');
        this.btnCancel = document.getElementById('custom-alert-btn-cancel');
    },

    show: function(options) {
        return new Promise((resolve) => {
            if (!this.overlay) this.init();

            let title = '';
            let icon = 'warning';
            let confirmText = 'OKE';
            let showCancel = false;
            let showInput = false;
            let inputPlaceholder = '';
            let iconColor = '#f59e0b'; // orange warning color

            if (typeof options === 'string') {
                title = options;
            } else {
                title = options.title || options.message;
                icon = options.icon || icon;
                confirmText = options.confirmText || confirmText;
                showCancel = options.showCancel || false;
                showInput = options.showInput || false;
                inputPlaceholder = options.inputPlaceholder || '';
                if (options.iconColor) iconColor = options.iconColor;
                
                // Adjust default colors based on icon type if not explicitly provided
                if (!options.iconColor) {
                    if (icon === 'check_circle') iconColor = '#10b981'; // green
                    if (icon === 'error') iconColor = '#ef4444'; // red
                    if (icon === 'info') iconColor = '#3b82f6'; // blue
                }
            }

            this.titleEl.textContent = title;
            this.iconEl.textContent = icon;
            this.iconEl.style.color = iconColor;
            this.btnConfirm.innerHTML = confirmText;
            
            if (showInput) {
                this.inputEl.style.display = 'block';
                this.inputEl.placeholder = inputPlaceholder;
                this.inputEl.value = '';
                this.titleEl.style.marginBottom = '16px';
            } else {
                this.inputEl.style.display = 'none';
                this.titleEl.style.marginBottom = '24px';
            }
            
            if (showCancel) {
                this.btnCancel.style.display = 'inline-block';
            } else {
                this.btnCancel.style.display = 'none';
            }

            this.overlay.classList.add('active');

            const handleConfirm = () => {
                const val = this.inputEl.value;
                cleanup();
                resolve(showInput ? val : true);
            };

            const handleCancel = () => {
                cleanup();
                resolve(showInput ? null : false);
            };

            const cleanup = () => {
                this.overlay.classList.remove('active');
                this.btnConfirm.removeEventListener('click', handleConfirm);
                this.btnCancel.removeEventListener('click', handleCancel);
            };

            this.btnConfirm.addEventListener('click', handleConfirm);
            this.btnCancel.addEventListener('click', handleCancel);
            
            if (showInput) {
                setTimeout(() => this.inputEl.focus(), 100);
            }
        });
    }
};

window.customAlert = CustomAlert.show.bind(CustomAlert);
