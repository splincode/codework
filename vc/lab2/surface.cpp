#define _USE_MATH_DEFINES
#include <cmath>
#include <windows.h>
#include <tchar.h>

LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);
TCHAR WinName[] = _T("MainFrame");

int APIENTRY WinMain(HINSTANCE This, HINSTANCE Prev, LPSTR cmd, int mode) {

	HWND hWnd; // дескриптор главного окна программы
	MSG msg; // структура для хранения сообщений
	WNDCLASS wc; // класс окна

	wc.hInstance = This;
	wc.lpszClassName = WinName; // имя класса окна
	wc.lpfnWndProc = WndProc; // функция окна
	wc.style = CS_HREDRAW / CS_VREDRAW; // cтиль окна
	wc.hIcon = LoadIcon(NULL, IDC_ARROW); // иконка
	wc.hCursor = LoadCursor(NULL, IDC_ARROW); //  cтандартный курсор
	wc.lpszMenuName = NULL; // отключение меню
	wc.cbClsExtra = 0;
	wc.cbWndExtra = 0;

	// заполнение окна белым цветом
	wc.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1); // установка цвета

	if (!RegisterClass(&wc)) return 0;

	// Создание окна
	hWnd = CreateWindow(
		WinName,
		_T("Поверхность"),
		WS_OVERLAPPEDWINDOW,
		CW_USEDEFAULT, // x
		CW_USEDEFAULT, // y
		CW_USEDEFAULT, // width
		CW_USEDEFAULT, // height
		HWND_DESKTOP, // дескриптор родительского окна
		NULL, // отключение меню
		This, // дескриптор приложения
		NULL // дополнительной информации нет
	);

	ShowWindow(hWnd, mode);

	while (GetMessage(&msg, NULL, 0, 0)) {

		TranslateMessage(&msg); // трансляция кодов нажатой клавиши
		DispatchMessage(&msg); // посылает сообщение функции WndProc()

	}


	return 0;

}


// оконная функция
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam) {

	PAINTSTRUCT ps;
	HDC hdc;

	static HPEN hpen, hpen1, hpen2;
	static int sx, sy;
	int a, b, n, x_scr, y_scr, z_scr;
	double x, y, z;
	double x_min, x_max, y_min, y_max, Kx, Ky;

	switch (message) {
	case WM_CREATE:
		hpen = CreatePen(PS_SOLID, 2, RGB(0, 0, 255));
		hpen1 = CreatePen(PS_SOLID, 2, RGB(0, 0, 255));
		hpen2 = CreatePen(PS_SOLID, 2, RGB(255, 0, 0));
		break;

	case WM_SIZE:
		sx = LOWORD(lParam);
		sy = HIWORD(lParam);
		break;

	case WM_PAINT:

		hdc = BeginPaint(hWnd, &ps);
		a = sx / 2;
		b = sy / 2;

		x_min = -100;
		x_max = 100;
		y_min = -100;
		y_max = 100;

		Kx = (sx - 220) / (x_max - x_min);
		Ky = (sy - 220) / (y_max - y_min);

		SelectObject(hdc, hpen);
		MoveToEx(hdc, 0, b, NULL);
		LineTo(hdc, sx, b);
		MoveToEx(hdc, a, 0, NULL);

		LineTo(hdc, a, sy);
		MoveToEx(hdc, 20, sy - 20, NULL);
		LineTo(hdc, sx - 20, 20);
		n = y_max - y_min;

		for (y = y_min; y < y_max; y += 5) {

			hpen1 = CreatePen(PS_SOLID, 2, RGB(255, 255 - 255 / n*(y + y_min), 255 - 255 / n*(y + y_min)));
			SelectObject(hdc, hpen1);

			z = b - 100 * sin(M_PI / 50 * sqrt(x_min*x_min + y*y));
			MoveToEx(hdc, x_min*Kx + a + y, z + y, NULL);

			for (x = x_min; x < x_max; x += 5) {
				z = b - 100 * sin(M_PI / 50 * sqrt(x*x + y*y));
				LineTo(hdc, x*Kx + a + y, z + y);
			}

		}

		EndPaint(hWnd, &ps);
		break;

	case WM_DESTROY:
		DeleteObject(hpen);
		DeleteObject(hpen1);
		DeleteObject(hpen2);
		PostQuitMessage(0);
		break;

	default: return DefWindowProc(hWnd, message, wParam, lParam);

	}




	return 0;

}
