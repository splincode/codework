#define _USE_MATH_DEFINES
#include <cmath>
#include <windows.h>
#include <tchar.h>
#include <fstream>

static int sx, sy;
const int SCALE = 1000;
const int MARK = 4;

PAINTSTRUCT ps;

void DcInLp(POINT &point){
	point.x = point.x * SCALE/sx;
	point.y = SCALE - point.y * SCALE/sy;
}

void transform(HDC &hdc) {
	SetMapMode(hdc, MM_ANISOTROPIC);
	SetWindowExtEx(hdc, SCALE, -SCALE, NULL);
	SetViewportExtEx(hdc, sx, sy, NULL);
	SetViewportOrgEx(hdc, 0, sy, NULL);
}

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
		_T("Кривые безье"),
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

	HDC hdc;


	static HPEN hDash, hBezier;
	static HBRUSH hRect, hSel;
	static POINT pt[20];
	static POINT point;
	RECT rt;
	static int count, index;
	static bool capture;
	int i;

	std::ifstream in;
	std::ofstream out;

	
	switch (message) {
	case WM_CREATE:

		in.open("dat.txt");
		if (in.fail()){
			MessageBox(hWnd, _T("File not found dat.txt"), _T("Opened file"), MB_OK | MB_ICONEXCLAMATION);
			PostQuitMessage(0);
			return 1;
		}

		for (count = 0; in >> pt[count].x; count++) in >> pt[count].y;
		in.close();
		hDash = CreatePen(PS_DASH, 1, 0);
		hBezier = CreatePen(PS_SOLID, 4, RGB(0, 0, 255));
		hRect = CreateSolidBrush(RGB(128, 0, 128));
		hSel = CreateSolidBrush(RGB(255, 0, 0));


		break;

	case WM_SIZE:
		sx = LOWORD(lParam);
		sy = HIWORD(lParam);
		
		break;


	case WM_LBUTTONDOWN:

		point.x = LOWORD(lParam);
		point.y = HIWORD(lParam);

		DcInLp(point);

		for(i =0; i <= count; i++) {

			SetRect(&rt, pt[i].x - MARK, pt[i].y - MARK, pt[i].x + MARK, pt[i].y + MARK);

			if (PtInRect(&rt, point)) {
				index = i;
				capture = true;
				hdc = GetDC(hWnd);

				transform(hdc);
				FillRect(hdc, &rt, hSel);
				ReleaseDC(hWnd, hdc);
				SetCapture(hWnd);
				return 0;

			}

		}


		break;


	case WM_LBUTTONUP:

		if (capture) {
		
			ReleaseCapture();
			capture = false;
		
		}

		break;

	case WM_MOUSEMOVE:

		if (capture) {
		
			point.x = LOWORD(lParam);
			point.y = HIWORD(lParam);
			DcInLp(point);
			pt[index] = point;
			InvalidateRect(hWnd, NULL, TRUE);

		}

		break;

	case WM_PAINT:

		hdc = BeginPaint(hWnd, &ps);
		transform(hdc);

		SelectObject(hdc, hDash);
		Polyline(hdc, pt, count);

		SelectObject(hdc, hBezier);
		PolyBezier(hdc, pt, count);

		for (i =0; i < count; i++) {
		
			SetRect(&rt, pt[i].x - MARK, pt[i].y - MARK, pt[i].x + MARK, pt[i].y + MARK);
			FillRect(hdc, &rt, hRect);
		
		}
	

		break;


	case WM_DESTROY:

		DeleteObject(hDash);
		DeleteObject(hBezier);
		DeleteObject(hRect);
		DeleteObject(hSel);

		PostQuitMessage(0);
		break;

	default: return DefWindowProc(hWnd, message, wParam, lParam);

	}




	return 0;


}
