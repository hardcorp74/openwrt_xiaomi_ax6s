'use strict';
'require uci';
'require view';
'require form';

return view.extend({
    render: function() {
        var m, s, o;
        m = new form.Map('bsskick', _('Bsskick'),
            _('This is a service for checking Wi-Fi hosts that send message "bss_termination_delay" and reject change Wi-Fi AP.<p>Bsskick force disconnect Wi-Fi hosts from old Wi-Fi AP and it can bee used with Usteer and DAWN.<p>For new settings Apply need restart service bsskick in System - Startup or <code>/etc/init.d/bsskick restart</code>'));
        s = m.section(form.TypedSection, 'bsskick', _('Main option'));
        s.anonymous = true;
        o = s.option(form.DynamicList, 'mac', _('List for ignore bsskick'), _('MAC address'));
        return m.render();
    },
});
