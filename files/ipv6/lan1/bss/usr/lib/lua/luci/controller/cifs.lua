
module("luci.controller.cifs", package.seeall)

function index()
	if not nixio.fs.access("/etc/config/cifs") then
		return
	end

	local page

	page = entry({"admin", "storage", "cifs"}, cbi("cifs"), _("Mount Shares"))
	page.dependent = true
end
