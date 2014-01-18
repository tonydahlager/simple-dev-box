echo ""
echo ""
echo ""
echo ""
echo ""
echo "Update `apt-get` packages"
sudo apt-get update

echo ""
echo ""
echo ""
echo ""
echo ""
echo "Install ansible"
sudo apt-get install ansible

echo ""
echo ""
echo ""
echo ""
echo ""
echo "Run the simple-dev-box playbook"
ansible-playbook -i /vagrant/inventory_local /vagrant/nodejs-single-node.yml
