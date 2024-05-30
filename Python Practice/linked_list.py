class Node:
	def __init__(self, value):
		self.value = value
		self.next = None

class LinkedList:
	def __init__(self, head=None):
		self.head = head
		print('head--', self.head)

	def append(self, new_node):
		current = self.head
		print('current--',current)
		print('next', current.next)
		if current:
			while current.next:
				print('next in while--', current.next)
				current = current.next
			current.next = new_node
			print('current.next after while', current.value)
		else:
			self.head = new_node
			print('--- in else block--', self.head)

	def insert(self, value):
		current = self.head
		print('current in insert -- ', current.value)
		if current is None:
			self.head = value
		else:
			while current.next:
				current = current.next
				current.next = value
				print('---- in while-- insert --', current.value)

	def delete(self, value):
		current = self.head
		print("current in delete -- ", current.value)
		if current.value == value:
			self.head = current.next
		else:
			while current:
				if current.value == value:
					break
				prev = current
				current = current.next
			if current is None:
				return
			prev.next = current.next
			current = None 


	def print(self):
		current = self.head

		while current:
			# print(current.value)
			print('print linked_list -- ', current.value)
			current = current.next

node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)

# print(node1.data, node1.next)
# print(node4.value, node4.next)

linked_list = LinkedList(node1)

linked_list.append(node2)
linked_list.append(node3)
linked_list.append(node4)

# linked_list.delete(2)

linked_list.insert(5)

linked_list.print()
