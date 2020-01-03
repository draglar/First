import matplotlib.pyplot as plt
#to be called using plt
X=[]
Y=[]

def reg():
    sx = sy = sxy = sxx = 0
    n = int(input('enter number of x: '))
    x = str(input('enter title of x:  '))
    y = str(input('enter title of y:  '))
    for i in range(n):
        x1=float(input(f'enter value {i+1} of {x}:  '))
        y1=float(input(f'enter value {i+1} of {y}:  '))
        X.append(x1)
        Y.append(y1)
        sx = x1 + sx
        sy = y1 + sy#sums
        sxy = (x1*y1) + sxy
        xx = x1*x1
        sxx = xx + sxx#s-->sum of
    nb=(n*sxy)-(sx*sy)#n--.numerator of
    db=(n*sxx)-(sx*sx)
    b=nb/db
    a=(sy-(b*sx))/n
    print(f'regression formular is:y={a}+{b}x.')

    def plots():
        plt.plot(X,Y)
       # plt.plot(Y)
        plt.ylabel(y)
        plt.xlabel(x)
        plt.show()

    plots()

    def tstr():
        ij = int(input('press 1 to continue'))
        if (ij == 1):
            tst()
        else:
            print('wrong input')
            tstr()
    def tst():
        tst = int(input(f'search for value of\t1:{x} and\t2:{y}\n'))
        if tst == 1:
            # for x
            yt = float(input(f'enter the value of {y}:  '))
            Xx=(yt - a) / b
            print(f'{x}={Xx}')
            plt.scatter(Xx,yt)
            tstr()
        elif tst == 2:
            # for y   xt--> x test
            xt = float(input(f'enter the value of {x}:  '))
            Yy=a + (b * xt)
            print(f'{y}={Yy}')
            plt.scatter(xt,Yy)
            tstr()
        else:
            print('wrong input\n')
            tstr()
    tst()


reg()