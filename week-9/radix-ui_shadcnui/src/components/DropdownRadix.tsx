import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function DropdownRadix() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="bg-blue-500 text-white px-4 py-2 rounded">
        Menu
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          className="w-40 bg-white border rounded shadow p-1"
        >
          <DropdownMenu.Item className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer outline-none">
            Profile
          </DropdownMenu.Item>

          <DropdownMenu.Item className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer outline-none">
            Settings
          </DropdownMenu.Item>

          <DropdownMenu.Item className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer outline-none text-red-500">
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
